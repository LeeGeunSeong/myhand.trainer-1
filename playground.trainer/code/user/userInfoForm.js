module.exports.function = function userInfoForm (Height,Weight,Inbody,GoalWeight) {
  const console = require('console');
    let json = require('https://api.sheety.co/06e4254c-bd5b-435d-8de5-ee46e32ff8ed');

    console.log(json);
  return  { 
    Height : Height
    , Weight : Weight
    , Inbody : Inbody
    , GoalWeight : GoalWeight
    };
}
