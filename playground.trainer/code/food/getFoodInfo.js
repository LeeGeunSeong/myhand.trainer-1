module.exports.function = function test (foodName) {
  const foodDB = require('util/database.js');
  const console = require('console');
  let foodlist = foodDB.food;
  console.log(foodName);
  for(i =0; i < foodlist.length; i++){
    console.log(foodlist[i].foodName)
    if(foodlist[i].foodName == foodName)
      return foodlist[i];
  }
  return null;
}
