class paraent{
    phone(){
        console.log("inside paraent class phone method")
    }
}
// single inheritance
class child extends paraent{

}
var child=new child();
child.phone()
 //chiled inhertance the paratnet class they can accec the methods


 //multilevel inhertance
 class paraent{
     m1(){
         console.log("inside paraent m1")
     }
 }
 class subchiled extends paraent{
    m2(){
        console.log("inside paraent m2")
    }
}
class chiled extends subchiled{
    m3(){
        console.log("inside paraent m3")
    }
}
var subchiled=new chiled()
chiled.m3();
chiled.m2();
chiled.m1();