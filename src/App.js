import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import Sunny from "./icons/sunny.svg";
import Night from "./icons/night.svg";
import Day from "./icons/day.svg";
import cloudyNight from "./icons/cloudy-night.svg";
import cloudy from "./icons/cloudy.svg";
import PerfectDay from "./icons/perfect-day.svg";
import Rain from "./icons/rain.svg";
import RainNight from "./icons/rain-night.svg";
import Storm from "./icons/storm.svg";

export const WeatherIcons = {
  "01d": Sunny,
  "01n": Night,
  "02d": Day,
  "02n": cloudyNight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": PerfectDay,
  "04n": cloudyNight,
  "09d": Rain,
  "09n": RainNight,
  "10d": Rain,
  "10n": RainNight,
  "11d": Storm,
  "11n": Storm,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Цаг Агаар</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
