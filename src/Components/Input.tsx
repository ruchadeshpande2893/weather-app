import { RefObject } from "react"

type InputProps = {
    type: string,
    placeholder: string,
    className: string,
    ref: RefObject<HTMLInputElement | null>
}

export default function Input({ type, className, placeholder, ref }: InputProps) {
    return <input className={className} type={type} placeholder={placeholder} ref={ref} />
}