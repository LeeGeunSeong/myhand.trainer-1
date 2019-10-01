module.exports.function = function getuserInfoForm (userInfoInput,height,weight,inbody,goalWeight) {
  const console = require('console');
  var util = require('util/util.js');
  
  var info = { 
    height : height
    , weight : weight
    , inbody : inbody
    , goalWeight : goalWeight
    };
  return info;
}
