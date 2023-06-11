import Style from "./OutraLista.module.css"

function OutraLista({ itens }){
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            
            {itens.length > 0 ?(
                itens.map((Item, index) =>(
                    <p Key={index} className={Style.ItemContent} >{Item}</p>
                ))): (
                    <p className={Style.ItemContent}>Não há itens na lista</p>
                )
            }

        </>
    )
}

export default OutraLista