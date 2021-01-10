var datetimee = document.getElementById("date-dayname");
var thu = document.getElementById("day-name");
var err = document.getElementById("error");
var locationn = document.getElementById("location");
var nhietdo = document.getElementById("weather-temp");
var d = new Date();
var des = document.getElementById("description");
time();
function time(){
    var year = d.getFullYear();
    console.log(year);
    var month;
    var mon = d.getMonth();
    if(mon === 0){
        month = "Jan";
    }
    if(mon === 1){
        month = "Feb";
    }
    if(mon === 2){
        month = "Mar";
    }
    if(mon === 3){
        month = "Apr";
    }
    if(mon === 4){
        month = "May";
    }
    if(mon === 5){
        month = "Jun";
    }
    if(mon === 6){
        month = "Jul";
    }
    if(mon === 7){
        month = "Aug";
    }
    if(mon === 8){
        month = "Sep";
    }
    if(mon === 9){
        month = "Oct";
    }
    if(mon === 10){
        month = "Nov";
    }
    if(mon === 11){
        month = "Dec";
    }
    var day;
    var n = d.getDay();
    if(n === 0){
        day = "Sunday";
    }
    if(n === 1){
        day = "Monday";
    }
    if(n === 2){
        day = "Tuesday";
    }
    if(n === 3){
        day = "Wednesday";
    }
    if(n === 4){
        day = "Thurday";
    }
    if(n === 5){
        day = "Friday";
    }
    if(n === 6){
        day = "Saturday";
    }
    var ddd = d.getDate();
    thu.innerHTML = day;
    datetimee.innerHTML = ddd +" "+month+" " +year;
}
const key = "85acc8619f90ceb325a97bc415ca8927";
const KELVIN = 273;
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(Setposition, showErr);
}
else{
    err.style.display = "clock";
    err.innerHTML = "Your broswer doesn't support position";
}
function Setposition(position){
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
console.log(latitude);
console.log(longitude);
getweather(latitude, longitude);
}
function showErr(error){
err.style.display = "block";
err.innerHTML = error.message;
}
const weather ={};
weather.temperature ={
    unit: "celsius"
}
function getweather(latitude, longitude){
   let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
   console.log(api) 
   fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].icon;
        weather.iconID = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
        weather.dess = data.weather[0].description;
    })
    .then(function(){
        displayweather();
    });
}
var ic = document.getElementById("icon");
var sunny = document.getElementById("sunny");
var cloudy = document.getElementById("cloudy");
var snowy = document.getElementById("snowy");
var stormy = document.getElementById("stormy");
var suppermon = document.getElementById("supermoon");
function displayweather(){
    locationn.innerHTML = `${weather.city}, ${weather.country}`;
    nhietdo.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    des.innerHTML = `${weather.dess}`;
    var icon = `${weather.description}`;
    ic.innerHTML = icon;
    console.log(typeof(icon));
    var no = weather.temperature.value;
    console.log(no);
    if(icon === "01d" || icon === "02d" || icon === "03d"){
        sunny.style.display = "block";
    }
    else if( icon === "9d" || icon ==="10d" || icon === "11d" || icon === "9n" || icon === "10n" || icon === "11n"){
        stormy.style.display = "block";
    }
    else if(icon === "13d" || icon === "13n" || no < 10){
        snowy.style.display = "block";
    }
    else if(icon === "01n" || icon ==="50d" || icon === "50n" || icon === "02n" || icon === "03n"){
        suppermon.style.display = "block";
    }
}
