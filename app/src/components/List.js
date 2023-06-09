import Item from './Item'
import Style from './List.module.css'


function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul className={Style.ListContent}>
                <Item marca="Coke" foto="https://st2.depositphotos.com/1081688/5184/i/450/depositphotos_51848395-stock-photo-coca-cola-with-ice-cubes.jpg"/>
                <Item marca="Pepsi" foto="https://thumbs.dreamstime.com/z/copo-com-papsi-102696061.jpg"/>
            </ul>
        </>
        
    )
}

export default List