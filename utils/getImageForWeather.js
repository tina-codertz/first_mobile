export default function getImageForWeather(weather) {
    switch(weather){
        case "Clear":
            return {uri:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"}; // Sunny sky
        case "Rain":
            return {uri:"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"}; // Rainy weather
        case "Thunderstorm":
            return {uri:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"}; // Thunderstorm
        case "Clouds":
            return {uri:"https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=80"}; // Cloudy sky
        case "Snow":
            return {uri:"https://images.unsplash.com/photo-1608889174673-1e4b5a5f6f3b?auto=format&fit=crop&w=800&q=80"}; // Snowy weather
        case "Drizzle":
            return {uri:"https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=800&q=80"}; // Drizzle
        case "Mist":
        case "Haze":
        case "Fog":
            return {uri:"https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"}; // Foggy weather
        default:
            return {uri:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"}; // Default to sunny sky

   }
}