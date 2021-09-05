
        function  displayValue(data){
          let feel=data.main.feels_like
          let tempr=data.main.temp
          let tempmin=data.main.temp_min
          let tempmxm=data.main.temp_max
          let pre=data.main.pressure
          let hum=data.main.humidity
          let sea=data.main.sea_level
          let grnd=data.main.grnd_level
        
        let html_data=`
        tempratur:${tempr}
        `


`
        
        result.innerHTML=html_data;
        
        }
// details.innerHTML=html_data;

              function fetchWeather(){
                  let p_name=place.value;
                let  url=`https://api.openweathermap.org/data/2.5/weather?q=${p_name}&units=metric&appid=4d513c794e190784dacee2ee938417d3`
                  fetch(url).then(res=>res.json()).then(data=>{
  // result.innerHTML=data.main.temp
  // result.innerHTML=data.main.feels_like
// console.log(data);
displayValue(data)
              })
            }
            
            