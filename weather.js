const apiurl="https://api.openweathermap.org/data/2.5/weather?q="
const apikey="ae947555412ff8763f097f0b445a7dec"
async function cheackwether(town){
 const response= await fetch(apiurl+town+`&appid=${apikey}`)
var data= await response.json()
console.log(data)
if(data.weather[0].main=="Clear"){
    document.getElementById("weather-img").src="clear.png"
}
else if(data.weather[0].main=="Clouds"){
    document.getElementById("weather-img").src="clouds.png"
}
else if(data.weather[0].main=="Drizzle"){
    document.getElementById("weather-img").src="drizzle.png"
}
else if(data.weather[0].main =="Mist"){
    document.getElementById("weather-img").src="mist.png"
}
else if(data.weather[0].main=="Rain"){
    document.getElementById("weather-img").src="rain.png"
}else if(data.weather[0].main=="Snow"){
    document.getElementById("weather-img").src="snow.png"
}
document.getElementById("city").innerHTML=data.name
document.getElementById("temp").innerHTML=Math.round(data.main.temp- 273.15)+"°C"
document.getElementById("humidity").innerHTML=data.main.humidity+"%"
document.getElementById("wind").innerHTML=data.wind.speed+"km/h" 
document.getElementById("details-box").style.display="block";
}
document.getElementById("search-button").addEventListener("click",function(){
    const v=document.getElementById("search").value
    cheackwether(v)
   
})

