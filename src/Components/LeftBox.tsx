import { WeatherInfo } from "./App";
import "./LeftBox.css";

type LeftBoxProps = {
    stateVar: WeatherInfo | undefined
}

export default function LeftBox({ stateVar }: LeftBoxProps) {
    return (
        <div className="left-box">
            <div className="header">
                <p className="margin-padding-zero">Weather App</p>
            </div>
            <div className="left-box-1">
                <h1 className="margin-padding-zero">{stateVar?.current.temperature}{stateVar?.degC}</h1>
                <h2 className="margin-padding-zero">{stateVar?.location.name}</h2>
                <p className="margin-padding-zero">{stateVar?.location.localtime}</p>
            </div>
            <div className="left-box-2">
                <h3 className="margin-padding-zero">{stateVar?.current.weather_descriptions[0].toUpperCase()}</h3>
                <img src={stateVar?.current.weather_icons[0]} />
            </div>
        </div>
    )
}

