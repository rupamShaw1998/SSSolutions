import styled from "styled-components";

export const WeatherBox = styled.div`
    border-style: dashed;
    border-radius: 10px; 
    width: 45%;
    margin: auto;
`;

export const Heading = styled.div`
    font-size: 50px;
    text-align: center;
    font-weight: bold;
`;

export const StyledInput = styled.input`
    background-color: #ebeffb;
    border: none;
    border-bottom: 1px dashed;
    margin: 10% 3% 10% 30%;
    height: 30px;
`;

export const StyledButton = styled.button`
    background-color: #4b6888;
    border-radius: 15px;
    border: 1px solid black;
    color: white;
    height: 30px;
`;

export const DetailBox = styled.div`
    background-color: #f4f2f3;
    border: 1px solid black;
    width: 60%;
    height: 200px;
    margin: auto;
    padding: 5%;
    border-radius: 10px;
`;

export const CityText = styled.div`
    font-size: 25px;
`;

export const TimeText = styled.div`
    color: grey;
`;

export const TempBox = styled.div`
    display: flex;
    margin: 5% 1% 5% 20%;
`;

export const TempText = styled.div`
    font-weight: bolder;
    font-size: 55px;
`;

export const IconBox = styled.div`
    border: 1px;
    margin-top: -2%;
`;

export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5% auto;
    width: 70%;
`;

export const Box = styled.div`
    width: 42%;
`

export const InfoProps = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10%;
    padding-bottom: 5%;
    border: none;
    border-bottom: dashed grey;
    width: 100%;
`;

export const StyledSpan = styled.span`
    color: grey;
    font-weight: normal;
    margin-left: 5%;
`;
