import { WeatherInfo } from "./App";

type WeatherDetailsProps = {
    stateVar: WeatherInfo | undefined
}

export default function WeatherDetails({ stateVar }: WeatherDetailsProps) {
    return (
        <div className="grid grid-rows-2">
            <div className="grid grid-cols-2">
                <div className="bg-zinc-700/20 p-6 rounded-lg shadow-lg font-bold text-3xl text-zinc-50 h-4/5 w-3/5 grid grid-rows-2 justify-self-center self-center">
                    <p className="justify-self-center self-center">Humidity</p>
                    <p className="justify-self-center self-center">{stateVar?.current.humidity}%</p>
                </div>
                <div className="bg-zinc-700/20 p-6 rounded-lg shadow-lg font-bold text-3xl text-zinc-50 h-4/5 w-3/5 grid grid-rows-2 justify-self-center self-center">
                    <p className="justify-self-center self-center">Precipitation</p>
                    <p className="justify-self-center self-center">{stateVar?.current.precip}%</p>
                </div>
            </div>
            <div className="bg-zinc-700/20 p-6 rounded-lg shadow-lg font-bold text-3xl text-zinc-50 h-4/5 w-2/5 grid grid-rows-2 justify-self-center self-center">
                <p className="justify-self-center self-center">UV index</p>
                <p className="justify-self-center self-center">{stateVar?.current.uv_index}</p>
            </div>
        </div>
    )
} 