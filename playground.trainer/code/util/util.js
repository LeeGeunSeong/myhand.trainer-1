const foodDB = require('util/database.js');


module.exports.getFoodInfo = function(foodName) {
  const foodDB = require('util/database.js');
  const http = require('http');

  let foodlist = http.getUrl("https://api.sheety.co/c7eb6b6b-f849-4022-bfc7-bdd58a929e69",{format : 'json'})
  foodName = foodName.replace(/ /gi, "");

  let result = [];

  for(i =0; i < foodlist.length; i++){
    if(foodlist[i].foodName.replace(/ /gi, "").indexOf(foodName) != -1)
      result.push(foodlist[i]);
  }
  return result;
}
module.exports.getUserInfo = function (user) {
  var gW = ((user.height- 100) * 0.9) - user.weight <0?user.weight-5:user.weight+5;
  return {
    height : user.height,
    weight : user.weight,
    inbody : 80,
    goalWeight : gW0
  }
}

module.exports.findLastFood = function() {
    //look up last receipt from viv cloud
    var transaction = require('transaction')
    var console = require('console');
    
    return transaction.retrieve("playground.trainer.Receipt", "ALL",1)
}