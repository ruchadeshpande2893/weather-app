import { JSX, useState, useRef } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import "./App.css";
import Input from "./Input";
import Button from "./Button";
import { baseURL, apiKey } from "./Utils";


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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const inputValue = useRef<HTMLInputElement>(null);

  function handleClick() {
    fetch(`${baseURL}/current?access_key=${apiKey}&query=${inputValue.current?.value}`)
      .then((res: Response) => {
        return res.json()
      })
      .then((jsonData) => {
        let info = jsonData as WeatherInfo;
        info.degC = "°C"
        setWeatherInfo(info)
        setIsVisible(true)
      })
      .catch((err) => {
        alert(`Failed to fetch: ${err}`)
      })
  }



  return (
    <div className="grid grid-row-3 grid-cols-2 h-screen">
      <div className="grid col-start-1 col-end-3 grid-cols-2">
        <p className="font-bold text-zinc-50 p-6 text-4xl justify-self-start self-center ml-15">Weather App</p>
        <div className="relative justify-self-center self-center">
          <Input className="w-120 bg-zinc-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type=" text" placeholder="Search for a city" ref={inputValue} />
          <Button className="absolute left-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" value={buttonSvg()} onClickHandler={handleClick} />
        </div>
      </div>
      {isVisible && <LeftBox stateVar={weatherInfo} />}
      <RightBox isVisible={isVisible} stateVar={weatherInfo} />
      <div className="grid col-start-1 col-end-3 grid-cols-1 grid-row-1">
        <p className="justify-self-center self-center text-zinc-50">&#169; {new Date().getFullYear()} Weather App. All Rights Reserved.</p>
      </div>
    </div>

  )
}

function buttonSvg(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
    </svg>
  )
}