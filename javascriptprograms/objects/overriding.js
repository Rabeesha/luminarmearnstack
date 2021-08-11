class paraent{
    phone(){
        console.log("samsung");
    }
}
class child extends paraent{
    phone(){
        super.phone()//paraent method invok cheyum--super mean parent cls
        console.log("iphone");
    }
}
var child=new child();
child.phone()