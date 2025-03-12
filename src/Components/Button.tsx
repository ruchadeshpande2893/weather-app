import { JSX } from "react"

type ButtonProps = {
    type: "submit" | "button" | "reset",
    value?: JSX.Element,
    className: string,
    onClickHandler?: () => void
}

export default function Button({ type, className, value, onClickHandler }: ButtonProps) {
    return <button className={className} type={type} onClick={onClickHandler}>{value}</button>
}