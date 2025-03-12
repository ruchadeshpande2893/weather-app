import Input from "./Input";
import Button from "./Button";
import WeatherDetails from "./WeatherDetails";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { baseURL, apiKey } from "./Utils";
import { WeatherInfo } from "./App";
import "./RightBox.css";

type RightBoxProps = {
    stateFunction: Dispatch<SetStateAction<WeatherInfo | undefined>>,
    stateVar: WeatherInfo | undefined
}

export default function RightBox({ stateFunction, stateVar }: RightBoxProps) {
    const inputValue = useRef<HTMLInputElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);


    function handleClick() {
        fetch(`${baseURL}/current?access_key=${apiKey}&query=${inputValue.current?.value}`)
            .then((res: Response) => {
                return res.json()
            })
            .then((jsonData) => {
                let info = jsonData as WeatherInfo;
                info.degC = "°C"
                stateFunction(info)
                setIsVisible(true)
            })
            .catch((err) => {
                alert(`Failed to fetch: ${err}`)
            })
    }

    return (
        <div className="right-box">
            <div>
                <Input type="text" placeholder="Search for a city" ref={inputValue} />
                <Button type="button" value="Search" onClickHandler={handleClick} />
            </div>
            {isVisible && <WeatherDetails stateVar={stateVar} />}
        </div>
    )
}