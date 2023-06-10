import Style from './Evento.module.css'

function Evento(){
    function meuEvento(){
        console.log("Opa, fui ativado!")
    }

    return(
        <div className={Style.eventoContent}>
            <p> Clique aqui para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento