//create a prgrm to find element from array

var arr=[11,12,13,14,15]
var element=19;flag=0;
for(let num of arr){
    if(num==element){
        
        flag++;
        break;
    }
    
}
console.log(flag==0?"element not found":"element found")
//this is clled linear search