function GETWeather() {

    var newName = document.getElementById("CityInput");
    var cityName = document.getElementById("CityName");
    cityName.innerHTML = newName.value;


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=942fa7e731b18136008887a82567b4d9')
.then(response => response.json())
.then(data => {

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Temp").innerHTML = "Temp: " + Number(data.list[i].main.temp -218).toFixed(1)+ "°F";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Wind").innerHTML = "Wind: " + Number(data.list[i].wind.speed).toFixed(2) + "MPH";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Humidity").innerHTML = "Humidity: " + Number(data.list[i].main.humidity).toFixed(0) + "%";
    }
    

    document.getElementById("currentTemp").innerHTML = "Temp: " + Number(data.list[0].main.temp -218).toFixed(2) + "°F";
    document.getElementById("currentWind").innerHTML = "Wind: " + Number(data.list[0].wind.speed).toFixed(2) + "MPH";
    document.getElementById("currentHumidity").innerHTML = "Humidity: " + Number(data.list[0].main.humidity).toFixed(0);

    history(newName.value);

    console.log(data)

    


})

function history(newName)
{
var name = newName;
var names = [];
names.push(name);

const localStorageContent = localStorage.getItem(names)

console.log(localStorageContent)

for(i=0; i < names.length; i++)
{
document.getElementById("lastSearch"+i).innerHTML = name;
}
}
//.catch(err => alert("Error"))
}
