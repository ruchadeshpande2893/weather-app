type ButtonProps = {
    type: "submit" | "button" | "reset"
    value?: string
    onClickHandler?: () => void
}

export default function Button({type, value, onClickHandler}: ButtonProps) {
    return <button type={type} onClick={onClickHandler}>{value}</button>
}