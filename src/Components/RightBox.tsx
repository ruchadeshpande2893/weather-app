import WeatherDetails from "./WeatherDetails";
import { WeatherInfo } from "./App";

type RightBoxProps = {
    isVisible: boolean,
    stateVar: WeatherInfo | undefined
}

export default function RightBox({ stateVar, isVisible }: RightBoxProps) {
    return (
        <div className="grid grid-rows-[400px] mt-20">
            {isVisible && <WeatherDetails stateVar={stateVar} />}
        </div>
    )
}