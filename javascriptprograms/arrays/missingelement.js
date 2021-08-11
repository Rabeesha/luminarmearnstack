// var element=[1,2,4,5,6,7,8];
// var sumtotal="";
// var sum="";
// var n="";
// if(n*(n+1)/2){
//    sum= sum+element[i];
// }
// console.log(sumtotal-sum);
var a = [1,3,4,5,6]
 
var missing = new Array();

for (var i = 1; i <= a.length; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);

//n*n+1/2 1+2+3+4....10