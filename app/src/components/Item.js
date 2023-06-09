import Styles from './Item.module.css'
import PropTypes from 'prop-types'


function Item({marca, preco, foto}){
    return(<>
        <li>{marca} - R${preco} </li>
        <img className={Styles.ItemFoto} src={foto} alt={marca}></img>
        
    </>
    )
}

Item.proptTypes = {
    marca : PropTypes.string.isRequired,
    foto : PropTypes.string.isRequired,
    preco : PropTypes.float.isRequired,
}

Item.defaultProps = {
   marca: "Faltou a marca",
   foto: "Faltou a foto",
   preco: 0,
}

export default Item