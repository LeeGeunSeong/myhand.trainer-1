module.exports.function = function getuserInfoForm (userInfoInput) {
  var user = require("./getUserInfo.js");
  const console = require('console');
  var userInputForm =[];
  userInputForm.push("키");
  userInputForm.push("몸무게");
  userInputForm.push("인바디");
  userInputForm.push("목표체중");

  var info = { 
    height : 180
    , weight : 80
    , inbody : 0
    , goalWeight : 0
    };
  return userInputForm;
}
