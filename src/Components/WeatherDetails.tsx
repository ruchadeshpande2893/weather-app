import { WeatherInfo } from "./App";

type WeatherDetailsProps = {
    stateVar: WeatherInfo | undefined
}

export default function WeatherDetails({ stateVar }: WeatherDetailsProps) {
    return (
        <div>
            <div>
                <p>Humidity</p>
                <p>{stateVar?.current.humidity}%</p>
            </div>
            <div>
                <p>Precipitation</p>
                <p>{stateVar?.current.precip}%</p>
            </div>
            <div>
                <p>UV index</p>
                <p>{stateVar?.current.uv_index}</p>
            </div>
        </div>
    )
} 