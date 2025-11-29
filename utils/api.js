const BASE_URL ="https://api.openweathermap.org/data/2.5/weather";
const API_KEY = ""

export const fetchLocationId = async city =>{
    const response = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    if(data.cod !==200){
        throw new Error("City not found")
    }

    return {
        location:data.name,
        temparature:data.main.temp,
        weather:data.weather[0].main,
    };
};
