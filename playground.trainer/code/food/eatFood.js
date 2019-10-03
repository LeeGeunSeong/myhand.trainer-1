var transaction = require('transaction')
var dates = require('dates')
var config = require('config')
var console = require('console')
var http = require('http')

module.exports.function = function eatFood (foodName) {
  var util = require('util/util.js');
  var db = require('util/database.js')
  var food = util.getFoodInfo(foodName);
  let user = db.user;
  var calorie;
  if(food == null) return null;
  var before = util.findLastFood();
  console.log(before[0].TotalCalorie)
  if(before != null){
    calorie = before[0].TotalCalorie + food[0].foodCalorie;
  }else{
    calorie = user[0].totalCalorie + food[0].foodCalorie;
  }
  

  return {
    TotalCalorie : calorie,
    statusRefreshTime: dates.ZonedDateTime.now().plusSeconds(parseInt(config.get("status_refresh_time"))).getDateTime()
  }
}
