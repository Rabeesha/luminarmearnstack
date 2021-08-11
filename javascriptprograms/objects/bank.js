//bank accunt create,deposit,balance enqiury
class bank{
    accountCreate(accno,ac_type,balance){
        this.accno=accno;
        this.ac_type=ac_type;
        this.balance=balance;
       
    }
   


    deposit(amount){
        this.balance+=amount;
        console.log(`your account number ${this.accno} hasbeen credited with amount ${amount}aval balance${this.balance}`)
    }
    withdrawal(amount){
        if(this.balance>amount){
            this.balance-=amount;
            console.log(`youraccount debited rupees${amount}`)
           
        }
        else{
            console.log("insufficient balance transaction failed with error code")
        }
    }
    balanceEnqiury(){
      console.log(`your aval balnce is ${this.balance}`);
    }
    
}
var obj=new bank();
obj.accountCreate(1001,"savings",2000)
// obj.withdrawal(100)
// obj.deposit(40000)
// obj.balanceEnqiury()