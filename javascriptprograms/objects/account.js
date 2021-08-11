var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}

    ]},
    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"bill"},
        {to:1002,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}

    ]},
    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}

    ]},
    
    

]//chek acount 1000 is in his array
// console.log(datas.some(account=>account.acno==1005));
// //highest acount balance
// console.log(datas.reduce((acc1,acc2)=>acc1.balance<acc2.balance?acc2:acc1));
// // balance sort by desending order
// datas.sort((acc1,acc2)=>acc2.balance-acc1.balance).foreach(acc=>console.log(acc));
// //debit transaction
// console.log(datas.filter(account=>account.acno==1000)).foreach(account=>console.log(account.transactions));
// //credit transaction
// console.log(datas.filter(account=>account.acno.transactions["to"]==1000));
//payment history of 1001
var payment_history=[]
var credit_trans=datas.map(account=>account.transactions).forEach(transactions=>{
    transactions.forEach(trans=>{
        trans.to==1000?payment_history.push(trans):""
    })
})
datas.filter(account=>account.acno=1000).map(account=>payment_history.push(account.transactions))
console.log(payment_history);