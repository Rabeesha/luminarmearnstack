// //localstorage.setItem(key,value)
// //loclstorage.getItem(key)
// //localstorage.removeitem(key)
// //localstorage.clear()



// // localStorage.setItem("username","admin")
// // localStorage.setItem("password","123")
// // localStorage.setItem("token","abc123")
// // localStorage.removeItem("username")
// // localStorage.getItem("password")
// //json.prse()----
// var person1={pname:"ram",account_number:1000,balace:2000,password:"userone"}
// var person2={pname:"ram pj",account_number:1001,balace:2000,password:"userone"}
// localStorage.setItem(person1.account_number,JSON.stringify(person1))
// localStorage.setItem(person2.account_number,JSON.stringify(person2))
// function getbalance(account_number){
//     if(account_number in localStorage){
//         let user=JSON.parse(localStorage.getItem(account_number))
//         console.log(user.balace)
//     }
//     else{
//         console.log("invalid account number")
//     }
// }



//  function authenticate(account_number,password){
//      if(account_number in localStorage){
// let user=JSON.parse(localStorage.getItem(account_number))
// if(user.password==password && user.account_number==account_number){
//     console.log("login suces")
// }
// else{
//     console.log("invalid username")
// }
//      }
//      else{
//          console.log("invalid account number")
//      }
//  }
var person1={pname:"ram",account_number:1000,balace:2000,password:"userone"}
 var person2={pname:"ram pj",account_number:1001,balace:2000,password:"userone"}

class Bank{
    creatAccount(){
        let person_name=name1.value;
        let account_number=acno.value;
        let phone_number=phno.value;
        let balance=bal.value;
        let password=pwd.value;
       
        let user={
            person_name,account_number,phone_number,password,balance
        }
        
        if(account_number in localStorage){
            alert("Account already exist")
        }
        // if(person_name==""){
        //     alert("Name requierd")d
        // }




        // if(account_number==""){
        //     alert("account number requierd")
        // }
        // if(phone_number==""){
        //     alert("phone number requierd")
        // }
        // if(phone_number.length<10){
        //     alert("invalid phone number ")
        // }


        else{
            localStorage.setItem(account_number, JSON.stringify(user))
      alert("Account has been Created")
      location.href="banklogin.html"
        }
        
      



     
    }
   


authanticate(){
let account_number=uname.value;
let password=pwd.value;
if(account_number in localStorage){
    let user=JSON.parse(localStorage.getItem(account_number))
    

    if(user.password==password && user.account_number==account_number){
        alert("Login Success")
        sessionStorage.setItem(account_number,JSON.stringify(user))
        location.href="userhome.html"
        
    }
   
        // if (account_number=="" && password==""){
        //     alert("Username is obligatory")
        // }
    
 
    else{
        alert("Invalid credentials")
    }
   
}
else{
    alert("Invalid account number")
}
}

logout(){
    sessionStorage.clear()
    location.href="banklogin.html "
}
balanceenquiery(){
 
            let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            sessionStorage.setItem(user.account_number,JSON.stringify(user))
            alert(`your balance is ${user.balance}`)
   
}
fundtransfer(){
    let to_acno=toacno.value;
    let amount=amt.value;
    if(to_acno in localStorage){
        let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        if(user.balance>=amount){
            let user1=JSON.parse(localStorage.getItem(to_acno))
            let user2=JSON.parse(localStorage.getItem(user.account_number))
            user1.balance=Number(user1.balance)+Number(amount);
           
            user2.balance-=amount
            localStorage.setItem(user1.account_number,JSON.stringify(user1))
             localStorage.setItem(user2.account_number,JSON.stringify(user2))
            
             user.balance-=amount  
            sessionStorage.setItem(user.account_number,JSON.stringify(user))
            alert(`Fund transferd succusfuly your balance is ${user.balance}` )
          
        }
        else{
            alert("insuficent balance")
        }

    }
    
    else{
        alert("invalid Transaction")
    }
}

}
var bank=new Bank()