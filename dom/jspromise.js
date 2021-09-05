var mypromise= new Promise((resolve,reject)=>{
    let set_attedencetime=110;
    if(set_attedencetime>100){
        resolve("session intretd")
    }
  else{
      reject("session bad")
  }
  mypromise.then(res=>console.log(res)).catch(error=>console(error))
}
)