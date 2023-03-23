import axios from "axios";
import { useState } from "react";
import moment from "moment";
import { Box, CityText, DetailBox, Heading, IconBox, InfoBox, InfoProps, StyledButton, StyledInput, StyledSpan, TempBox, TempText, TimeText, WeatherBox } from "./Weather.styled";

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
        <WeatherBox>
            <Heading>
                Weather App
            </Heading>
            <StyledInput 
                type="text" 
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
            />
            <StyledButton onClick={submitHandler}>Submit</StyledButton>
            {
                Object.keys(data).length!==0? 
                <div>
                    <DetailBox>
                        <CityText>{data.name}, {data.sys.country}. Weather</CityText>
                        <TimeText>As of {moment.utc(data.dt,'X').add(data.timezone,'seconds').format('HH:mm A')}</TimeText>
                        <TempBox>
                            <TempText>{Math.round(data.main.temp-273)}°</TempText>
                            <IconBox>
                                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="#" />
                                <div>{data.weather[0].main}</div>
                            </IconBox>
                        </TempBox>
                        <div>{data.weather[0].description}</div>
                    </DetailBox>

                    <InfoBox>
                        <Box>
                            <InfoProps>High/Low <StyledSpan>{Math.round(data.main.temp_max-273)}/{Math.round(data.main.temp_min-273)}</StyledSpan></InfoProps>
                            <InfoProps>Humidity <StyledSpan>{data.main.humidity} %</StyledSpan></InfoProps>
                            <InfoProps>Pressure <StyledSpan>{data.main.pressure} hPa</StyledSpan></InfoProps>
                            <InfoProps>Visibility <StyledSpan>{data.visibility/1000} Km </StyledSpan></InfoProps>
                        </Box>
                        <Box>
                            <InfoProps>Wind <StyledSpan>{data.wind.speed} Km/hr</StyledSpan></InfoProps>
                            <InfoProps>Wind Direction <StyledSpan>{data.wind.deg}° deg</StyledSpan></InfoProps>
                            <InfoProps>Sunrise <StyledSpan>{moment.utc(data.sys.sunrise,'X').add(data.timezone,'seconds').format('HH:mm A')}</StyledSpan></InfoProps>
                            <InfoProps>Sunset <StyledSpan>{moment.utc(data.sys.sunset,'X').add(data.timezone,'seconds').format('HH:mm A')}</StyledSpan></InfoProps>
                        </Box>
                    </InfoBox>
                </div>
                :
                null
            }
        </WeatherBox>
    )
}
