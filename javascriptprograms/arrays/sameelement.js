arr1=[1,2,3,4,5]
arr2=[4,3,5,1,2]
// var flag=0;

// for(let num1 of arr1)
// {
//    for(let num2 of arr2){
//        if(num1==num2)   
      
//         console.log("numbers are not same ");
        
//         }
        
//     }
// flag=0;
// for(let i=0;i<arr1.length;i++)
//  {
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//              console.log(arr1[j]);
//          }
//      }
//  }

arr1.sort((num1,num2)=>num1-num2)
console.log(arr1);
arr2.sort((num1,num2)=>num1<num2)
console.log(arr2);
var limit=arr2.length-1;
flg=0;
if(arr1.length!=arr2.length){
console.log("arrys are not same");
}
else{
    for(let i=0;i<=limit;i++){
        if(arr1[i]==arr2[i]){
            continue
            flg++;
        }
    }
}