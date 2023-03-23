import axios from "axios";
import { useState } from "react";
import moment from "moment";

export const Weather = () => {
    const [city,setCity] = useState("");
    const [data,setData] = useState({});

    
    const submitHandler = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03acdf4358b9a3919bf89a1933d392c1`;
        try {
            const response = await axios.get(url);
            setData(response.data);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="weather">
            <h1>
                Weather App
            </h1>
            <input 
                type="text" 
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={submitHandler}>Submit</button>
            {
                Object.keys(data).length!==0? 
                <div>
                    <div className="weather-details">
                        <p>{data.name}, {data.sys.country}. Weather</p>
                        <p>As of {moment.utc(data.dt,'X').add(data.timezone,'seconds').format('HH:mm A')}</p>
                        <div style={{display: "flex"}}>
                            <h1>{Math.round(data.main.temp-273)}°C</h1>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="#" />
                                <p>{data.weather[0].main}</p>
                            </div>

                        </div>
                        <p>{data.weather[0].description}</p>
                    </div>
                    <div style={{display: "flex"}}>
                        <div>
                            <div>High/Low {data.main.temp_max}/{data.main.temp_min}</div>
                            <div>Humidity {data.main.humidity} %</div>
                            <div>Pressure {data.main.pressure} hPa</div>
                            <div>Visibility {data.visibility/1000} Km </div>
                        </div>
                        <div>
                            <div>Wind {data.wind.speed} Km/hr</div>
                            <div>Wind Direction {data.wind.deg}° deg</div>
                            <div>Sunrise {moment.utc(data.sys.sunrise,'X').add(data.timezone,'seconds').format('HH:mm A')}</div>
                            <div>Sunset {moment.utc(data.sys.sunset,'X').add(data.timezone,'seconds').format('HH:mm A')}</div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}
