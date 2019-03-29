/*
* @Author: digvijay
* @Date:   2019-01-10 11:57:33
* @Last Modified by:   naman
* @Last Modified time: 2019-02-06 11:30:14
*/


/*jshint node: true */
"use strict";

var langData = {

	gateHandler : {
    1 : "Server is under maintainence. Please try again after %{timeString}. We appreciate your support.",
    2 : "This installation is corrupted. Please try again.",
    3 : "Email ID already exists. Please try with a different email address.",
    4 : "Mobile number already exists try with different mobile number.",
    5 : "UserName already exists try with different username.",
    6 : "Please check the password and try again." ,
    7 : "Please check username/password again." ,
    8 : "Invalid user",
    9 : "PromoCode does not exist.",
    10 : "Sorry, you have been blocked to play on our software",
    11 : "Please verify your Email Id to login. Verification link has been already sent to your registered Email Id."
  },
  mobileotp : {
  	1 : "OTP doesn't match.",
    2 : "OTP sent successfully",
    3 : 'Mobile Number already exists'
  },
  cashOutForPlayer : {
  	1 : "Minimum amount should be 100."
  }

};

module.exports = langData;