let form = document.getElementById("myForm");
// console.log(btn);
let tempVal = document.getElementById("tempVal");
let tempDet = document.getElementById("tempDet");
let humidVal = document.getElementById("humidVal");
let windSpeed = document.getElementById("WindSpeed");
let Whe_img = document.getElementById("chngImg")

console.log(Whe_img.src);


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let fetchData = async() =>{
        let key = "1fff4f58f004fd749c78456215b02e71";
        let loc = document.getElementById("loc").value;
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`);
        let finalOutput = await data.json()
        tempVal.innerHTML = Math.round(finalOutput.main.temp-273) + "";
        tempDet.innerHTML = finalOutput.weather[0].main;
        humidVal.innerHTML = finalOutput.main.humidity + "%";
        windSpeed.innerHTML = finalOutput.wind.speed + "Km/H";
        let imgRes = tempDet.innerText.toLowerCase(); 
        if(imgRes == "haze"){
            Whe_img.src = "./Images/clear.png"
        }
        else if(imgRes == "clouds"){
            Whe_img.src = "./Images/cloud.png"
        }
        else if(imgRes == "mist"){
            Whe_img.src = "./Images/mist.png"
        }
        else if(imgRes == "rain"){
            Whe_img.src = "./Images/rain.png"
        }
        else if(imgRes == "snow"){
            Whe_img.src = "./Images/snow.png"
        }
        
    }
    fetchData()
})



