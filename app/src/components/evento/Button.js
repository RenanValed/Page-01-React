function Button(props){
    return <button type={props.type} onClick={props.event} >{props.text}</button>

}

export default Button