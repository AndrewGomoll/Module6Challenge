function GETWeather() {

    var newName = document.getElementById("CityInput");
    var cityName = document.getElementById("CityName");
    cityName.innerHTML = newName.value;

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=942fa7e731b18136008887a82567b4d9')
.then(response => response.json())
.then(data => {

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min -218).toFixed(1)+ "°F";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max -218).toFixed(2) + "°F";
    }

    console.log(data)


})

.catch(err => alert("Error"))
}
