import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './weatherApp.css';
export default function WeatherApp(){
    const[weatherInfo,setWeatherinfo]=useState({
        // city: "Gurugram",
        // feelsLike: 26.02,
        // humidity: 69,
        // temp: 26.02,
        // tempMax: 26.02,
        // tempMin: 26.02,
        // weather: "haze"
    });

    let updateInfo=(newResult)=>{
        setWeatherinfo(newResult);
    };
 return(
    <div style={{textAlign:"center"}}>
        <h1 className="heading">Weather App create by Aman using React</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div> 
 )
}