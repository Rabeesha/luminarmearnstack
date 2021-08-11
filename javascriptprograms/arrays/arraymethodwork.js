var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",105,5],
    ["004","bournvit",230,0],
    ["005","pediasure",275,50]
];
  //   //print prdcts name
  //    console.log(products.map(pro=>pro[1]));
    
    
  //   // //print avaiible prdct name
  // console.log(products.filter(pro=>pro[3]>0).map(pro=>pro[1]));

  //   //print out of stok prdct dtls
  //    console.log(products.filter(pro=>pro[3]==0).map(pro=>pro[1]));

  //   // //list all prdcts whose prize >250
  //      console.log(products.filter(pro=>pro[2]>250));
  //   // // //low cost prdct
     
// var low_cost=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_cost);
// high cost prodct
//  var high_cost=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
//  console.log(high_cost);

//     // //is thr any itm availble under 200

    // console.log(products.filter(pro=>pro[2]<200).map(pro=>pro[1]));

//      // high stok prodcut
    // var high_stock=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
    //  console.log(high_stock);
// //find method

    // console.log(products.find(item=>item[1]=="complan"));


//      //some method
    // console.log(products.some(item=>item[2]>200));


//      //forEach()
//      products.forEach((item)=>item[1]);
//     //  to print products one by one
//  products.forEach((item)=>console.log[item]);

// //sort() for decending
//  products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item))