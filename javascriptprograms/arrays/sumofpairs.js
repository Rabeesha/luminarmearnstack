var arr=[2,3,4,6,5]
var sum=7;
var low=0,upp=arr.length-1;
 for(let i=0; i<arr.length; i++){
    for(let j=i+1;j<arr.length;j++){
        let total=arr[i]+arr[j];
        if(total==sum){
            console.log(arr[i],arr[j]);
            break;
        }
   }
}


// for sorted array

// var arr=[2,3,4,6,5]
// var sum=7;
// var low=0,upp=arr.length-1;//3-1=2
//low=0 upp=2

// while(low<upp){
//     let total=arr[low]+arr[upp];
//     if(total==sum){
//         console.log(arr[low],arr[upp]);
//         break;
//     }
// else if  (total>sum)
//   {
//     upp--;

// }
// else{
// low++
// }



// }