var olympics=[
    
    {country:"unitedstates",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},   
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25}

];

// // print countrynames partcipating 2021 olympics

 olympics.map(nation=>nation.country).forEach(c_name=>console.log(c_name));


// // which country got most goldmedals
var max_gold=olympics.reduce((nation1,nation2)=>nation1["gold"]>nation2[2]?nation1:nation2)
 console.log(max_gold);

// // which contry got most medals
var max_medal=olympics.reduce((nation1,nation2)=>nation1["total"]>nation2["total"]?nation1:nation2)
// // sort countries based on gold medals
 var gold_medals=olympics.sort((nation1,nation2)=>nation1["gold"]>nation2["gold"]?nation2:nation1)
 console.log(gold_medals);

sort countries based on total medals
console.log(olympics.sort(["total"]));
// // countries got silver > 10
 var got_silver=olympics.filter((nation=>nation["silver"]>10))
 console.log(got_silver);
// //list of countries whose goldmedal=0
gold_medal=olympics.filter((nation=>nation["gold"]==0))
 console.log(gold_medal);
// // list the country names whose gold medal >20
var gold_medal=olympics.filter((nation=>nation["gold"]>20))
console.log(gold_medal);
// 

// // is pakisthan participating in 2021 olympics 
 var is_present=olympics.some((nation)=>nation.country=="pakistan")
console.log(is_present);