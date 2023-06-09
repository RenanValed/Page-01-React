import Styles from './Item.module.css'

function Item(props){
    return(<>
        <li>{props.marca} </li>
        <img className={Styles.ItemFoto} src={props.foto} alt={props.marca}></img>
    </>
    )
}

export default Item