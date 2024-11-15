import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
     let [city,setCity]=useState("");
     let [error,setError]=useState(false);
   
     let api_url="https://api.openweathermap.org/data/2.5/weather";
     let api_key="407e9a87753d4d27c74365843db0aee5";

     let weatherInfo= async()=>{
        try{
            let response= await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            let jsonResponse= await response.json();
            console.log(jsonResponse);
          let result={
              city:jsonResponse.name,
              temp:jsonResponse.main.temp,
              tempMin:jsonResponse.main.temp_min,
              tempMax:jsonResponse.main.temp_max,
              feelsLike:jsonResponse.main.feels_like,
              humidity:jsonResponse.main.humidity,
              weather:jsonResponse.weather[0].description,
          };
          console.log(result);
          return result;
        }catch(err){
            throw err;
        };
    };

     let handeleChange=(event)=>{
      setCity(event.target.value);
     };

     let handleSubmit= async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo= await weatherInfo();
           updateInfo(newInfo);
        }catch(err){
            setError(true);
        };
    };

    return (
        <div className='searchbox'>
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handeleChange} className='textField'/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <h2 style={{color:"red"}}>"No such place is exist in API!"</h2>}
            </form>
        </div>
    )
}