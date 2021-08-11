//class
class Person{
    setPerson(age,name){
        this.age=age;
        this.name=name;
    }
    getAge(){
        return this.age
    }
    getName(){
        return this.name
    }
}
var obj1=new Person();
var obj2=new Person();
obj1.setPerson(25,"ravi")
console.log(obj1.getName());