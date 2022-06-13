function Button(props) {
    // quando só tem uma linha, não precisa usar os ().
    return <button onClick={props.event}>{props.text}</button>
}

export default Button