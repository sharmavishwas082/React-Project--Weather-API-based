import SearchBox from "./SeacrhBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Brampton",
        feelslike: -15.11,
        temp:-8.11,
        tempMax: -7.37,
        tempMin: -8.27,
        humidity: 67,
        weather: "broken clouds"
    });
    let updateInfo = (newInfo) => {
setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Vishwas</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}