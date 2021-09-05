// let num1="hello",num2="hi",num3="hello",num4=50;
// try{
//     let res=eval("hello/hai")// exception occuring code or doubltful code
//     console.log(res);
// }
// catch(error){
//     console.log(console.message);// error vanalum code run avan 
// }

// throw{
//     //coustom exception
// }
// finally{//cleanup proccesing
// // console.log("data basee transction");
// // console.log("file opertion")
// }


    var phone="124557564454";
    try{
     if((phone.length<10) | (phone.length>10)) throw new Error("invalid phone number")

    }
    catch(error)
    {
        console.log(error.message);
    }