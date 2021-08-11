//=> arrow function or anonymous
//adding two numbers using arrowfunction
var add=(num1,num2)=>num1+num2
console.log(add(10,20));
//substract two numbers using arrowfunction
var sub=(num1,num2)=>num1-num2
console.log(sub(10,20));
// arrow function with ternary operaer
smartsub=(num1,num2)=>num1<num2?num2-num1:num1-num2
console.log(samartsub(10,20));



//cube number using arrowfunction
var cube=(num)=>num**3
console.log(cube(10));
//multi two numbers using arrowfunction
var multi=(num1,num2)=>num1*num2
console.log(multi(5,2));


let add=(num1,num2,num3)=>{
    let res=num1+num2+num3;
    return res
}
// create rrow function to find highst nbr
var high=(num1,num2)=>num1<num2?num1:num2
console.log(high(45,78));

// create arrow function find number is odd or even
var numchk=(num1)=>num1%2==0?"even":odd;
console.log(numchk(10));
