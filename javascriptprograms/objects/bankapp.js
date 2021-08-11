// var account_details={
//     1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
//     1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
//     1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
//     1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"}



// //chk for 1000 is present
// console.log(1000 in account_details)
class Bank{
  
     
    account_details={
            1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
            1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
             1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
            1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"}
}
session={}// to add the user id when loged
accountCreate(acno,balance,username,password){
    if(acno in this.account_details){
        console.log("account number alredy exists")


    }
    else{
        this.account_details[acno]={acno,balance,username,password}
        console.log("account created");
        console.log(this.account_details);
    }

}
authantication(acno,username,password){
    if(acno in this.account_details[acno]){
        if(this.account_details[acno].username == username){
            if(this.account_details[acno].password == password){
                console.log("login success");
                this.session["user"]=acno;
            }
        
    
            else{
                console.log("invalid password");
            }
    }
            else{
                console.log("invalid username");
            }
}
    else{
                 console.log("invalid account number");
        }
        }


        fundtransfer(from_ac,to_ac,amount){
            if(from_ac==this.session["user"]){
           if(to_ac in this.account_details){
if(this.account_details[from_ac].balance>amount){
    if(this.account_details[to_ac].balance+=amount);
    if(this.account_details[from_ac].balance-=amount);
    console.log(`your account ${from_ac}is debited with amount${amount}aval balance ${this.account_details[from_ac].balance}`);
}
else{
    console.log("insufficient balance")
}

           }
           else{
               console.log("invalid account number")
           }
            }
            else{
                console.log("invalid sesssion login required")
            }
        }
    
}




var obj=new Bank()
// obj.accountCreate(1001,2000,"userfive","userfive")
obj.authantication(1000,"userone","userone")
obj.fundtransfer(1000,1001,200)


