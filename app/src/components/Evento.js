import Style from './Evento.module.css'
import Button from './evento/Button'


function Evento(){
    function meuEvento(){
        console.log("Opa, fui ativado!")
    }

    function meu2Evento(){
        console.log("Opa, tambem fui!")
    }


    return(
        <div className={Style.eventoContent}>
            <p> Clique aqui para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={meu2Evento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento