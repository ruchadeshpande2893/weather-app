import { RefObject } from "react"

type InputProps = {
    type: string,
    placeholder: string,
    ref: RefObject<HTMLInputElement | null>
}

export default function Input({type, placeholder, ref}: InputProps) {
    return <input type={type} placeholder={placeholder} ref={ref}/>
}