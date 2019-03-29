/*
* @Author: digvijay
* @Date:   2019-01-10 11:57:46
* @Last Modified by:   naman
* @Last Modified time: 2019-02-05 19:17:51
*/


/*jshint node: true */
"use strict";

var langData = {

	gateHandler : {
    1 : "服务器处于维护状态。请在％{timeString}之后重试。感谢您的支持",
    2 : "此安装已损坏。请再试一次。",
    3 : "电子邮件ID已存在。请尝试使用其他电子邮件地址。",
    4 : "手机号码已经存在尝试使用不同的手机号码。",
    5 : "用户名存在。",
    6 : "请检查密码，然后重试。",
    7 : "请检查您的ID和密码。",
    8 : "用户无效。",
    9 : "促销代码不存在。",
    10 : "抱歉。 您被禁止参加此计划。",
    11 : "检查您的电子邮件是否已登录。 通过电子邮件发送验证链接。"
  },
  mobileotp : {
  	1 : "OTP不匹配。",
    2 : "OTP发送成功。" ,
    3 : '手机号码已存在。'
  },
  cashOutForPlayer : {
  	1 : "最低金额为100。"
  }

};


module.exports = langData;