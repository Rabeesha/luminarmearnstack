class person{
    constructor(age,name){
    this.age=age;
    this.name=name;
    //construter is intilazing instance variable 
}
printperson(){
    console.log(this.age,this.name)
}
}
var person=new person(25,"ajay");
person.printperson()
//constructer
//intiliazing instance varivable
//constrctre name always class name in java and c .in javascript constrctor is constructr