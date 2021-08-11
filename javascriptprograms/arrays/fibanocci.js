//  var var1 = 0, var2 = 1, var3;
// while(var1<10)
//  {
//  console.log(var1 + " ");
//  var3 = var1+var2; var1 = var2;
//  var2 = var3;
//  }
 function fibanocci(n){
     if(n==0 | n==1){
         return n
    }
     else{
        return fibanocci(n-1) + fibanocci(n-2)

     }
    
 }
 console.log(fibanocci(1));