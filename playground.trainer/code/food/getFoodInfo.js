module.exports.function = function test (foodName) {
  const foodDB = require('util/database.js');
  const console = require('console');
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




