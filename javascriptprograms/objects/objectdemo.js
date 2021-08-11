//{key:value,key1:value}
var employee={
    eid:1001,
    e_name:"ram",
    desig:"developer",
    salary:5000
}
//print employee name
console.log(employee.e_name);
//chk foe ex is present if not add exp:1 else currnet exp+1

"exp" in employee?employee.exp+1:employee.exp=1
console.log(employee);
// for itrate all value of employee
for(let key in employee){
    console.log(key);
    console.log(employee[key]);
}