import { WeatherInfo } from "./App";

type LeftBoxProps = {
    stateVar: WeatherInfo | undefined
}

export default function LeftBox({ stateVar }: LeftBoxProps) {
    return (
        <div className="grid grid-rows-[200px_200px] mt-20">
            <div className="bg-zinc-700/20 text-zinc-50 p-6 rounded-lg shadow-lg grid grid-cols-3 h-4/5 w-4/5 justify-self-center self-center">
                <h1 className="font-extrabold text-5xl font-sans justify-self-center self-center">{stateVar?.current.temperature}{stateVar?.degC}</h1>
                <h2 className="font-extrabold text-3xl font-sans justify-self-center self-center">{stateVar?.location.name}</h2>
                <p className="text-lg font-sans justify-self-center self-center">{stateVar?.location.localtime}</p>
            </div>
            <div className="bg-zinc-700/20 text-zinc-50 p-6 rounded-lg shadow-lg grid grid-cols-2 h-4/5 w-3/5 justify-self-center self-center">
                <h3 className="font-extrabold text-3xl font-sans justify-self-center self-center">{stateVar?.current.weather_descriptions[0].toUpperCase()}</h3>
                <img className="justify-self-center self-center" src={stateVar?.current.weather_icons[0]} />
            </div>
        </div>
    )
}

