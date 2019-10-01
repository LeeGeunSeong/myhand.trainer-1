module.exports.function = function userInfo (user) {
  var gW = ((user.height- 100) * 0.9) - user.weight <0?user.weight-5:user.weight+5;
  return {
    height : user.height,
    weight : user.weight,
    inbody : 80,
    goalWeight : gW
  }
}
