//map() to compare all elements in array


// console.log(arr1.map(num=>num**2));
// var names=["ram","ravi"]
// console.log(names.map(name=>name.touppercase()));

// var nums=[2,3,4,5,6,7,8,9]
// console.log(nums.map(num=>num<5?num-1:num+1)

// )




 
//filter() using  a condtion to get value

// var arr=[10,11,12,13,52]
// console.log(arr.filter(num=>num%2==0));


//  var names=["ram","ravi","arun"]
//  console.log(names.filter(name=>name[0]=="r"));
//  var employees=[
//      [1000,"ram",2,25000,"devlepor"],
//  [1001,"ravi",1,500000,"devlepor"],
//  [1002,"raju",3,25000,"qa"],
//  [1003,"nikil",1,25000,"qa"]];
//   console.log(employees.map(emp=>emp[1]));

//   console.log(employees.map(emp=>emp[4]));
//   console.log(employees.filter(emp=>emp[4]=="devlepor"));
//   console.log(employees.filter(emp=>emp[3]>23000));
//  console.log(employees.filter(emp=>emp[3]>23000 & emp[4]=="devlepor").map(emp=>emp[1]));



// reduce() to get reduced one value
var arr=[10,11,12,13,14,15,65];
// var sum=arr.reduce((num1,num2)=>num1+num2)
// console.log(sum);
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);








// some() return  booliian value true or false

console.log(products.some(item=>item[2]>200));

// find() occaurnc first metting value
console.log(products.find(item=>item[1]=="complan"));
//forEach()

products.forEach((item)=>item[1]);
products.forEach((item)=>console.log[item]);

//sort()
products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item))