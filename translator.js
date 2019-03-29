/*
* @Author: digvijay
* @Date:   2019-01-10 11:58:28
* @Last Modified by:   naman
* @Last Modified time: 2019-02-06 15:49:03
*/



var globalLang = {};
const db = require("../model/dbQuery.js");
const Polyglot = require('./polyglot.min.js');
var async = require('async');
var translator = {};
let polyInst = null;

// function getLanguage(playerId) {
// 	db.findUser({playerId: playerId}, function(err, result2){
// 		console.log('here2   '+ result2.language);
// 		if(!err && !!result2){
// 			return result2.language;
// 		}else{
// 			console.log("No data of language found");
// 			return "eng";
// 		}
// 	});

// }

function loadLanguageData(lang) {
	console.log('inside loadLanguageData', lang);
	let path = "./"+lang+".js";
	globalLang = require(path);
	return globalLang;
}

function initPolyglot(data){
	console.log('inside initPolyglot');
    if (data) {
        if (polyInst) {
            polyInst.replace(data);
        } else {
            polyInst = new Polyglot({ phrases: data, allowMissing: true });
        }
    }
}

function translate(key, opt){
	console.log('inside translate');
    if (polyInst) {
        return polyInst.t(key, opt);
    }
}


// module.exports = {

// 	processTranslation (data) {
// 		var language = "";
// 		if(data.language){
// 			language = data.language;
// 		}else{
// 			language = getLanguage(data.playerId);
// 		}
// 		console.log("inside language--", language);
// 		var langData = loadLanguageData(language);
//     	initPolyglot(langData);
//     	this.inst = polyInst;
//     	console.log(translate(data.text, data.options));
//     	return translate(data.text, data.options);

// 	},

// 	inst: polyInst


// };

var getLanguage = function(params, cb){
	if(!!params.language){
		cb(null, params);
	}else if(params.playerId){
		db.findUserSessionInDB(params.playerId, function(err, result){
			if(!err && !!result){
				params.language = result.language;
				cb(null, params);
			}else{
				db.findUser({playerId: params.playerId}, function(err, result){
					console.log('here2   '+ result.language);
					if(!err && !!result){
						params.language = result.language;
						cb(null, params);
					}else{
						params.language = "eng";
						cb(null, params);
					}
				});
			}
		});
	}else {
		params.language = "eng";
		cb(null,params);
	}
};

var translateData = function(params,cb){
	console.log("inside translateData --", params);
	var langData = loadLanguageData(params.language);
    initPolyglot(langData);
    // this.inst = polyInst;
    console.log("Digvijay---\n");
    var msg =  translate(params.text, params.options);
    console.log(msg);
    cb(null, msg);
};



translator.processTranslation = function(params, cb){
	console.log("inside process translation", params);
	async.waterfall([
		async.apply(getLanguage, params),
		translateData
	],function(err, result){
		console.log("herre the result--", err, result);
		console.log("result"+result);
		cb(null,{success: true,text: result});
		// return translate(params.text, params.options);
	});
};


module.exports = translator;