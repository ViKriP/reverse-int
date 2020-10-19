module.exports = function reverse (n) {
  var reversN = n.toString().split("").reverse();
  var result = '';

  for(var i = 0; i < reversN.length; i++){
    if(reversN[i] !== '-'){
      result += reversN[i];
    }
  }
  
  return result;
}
