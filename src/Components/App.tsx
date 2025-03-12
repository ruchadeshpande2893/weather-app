import { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import "./App.css";

export type WeatherInfo = {
  location: {
    name: string,
    localtime: string
  },
  current: {
    temperature: number,
    weather_icons: string[],
    weather_descriptions: string[],
    precip: number,
    humidity: number,
    uv_index: number
  },
  degC: string
}

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();
  return (
    <div className="container">
      <LeftBox stateVar={weatherInfo} />
      <RightBox stateFunction={setWeatherInfo} stateVar={weatherInfo} />
    </div>
  )
}