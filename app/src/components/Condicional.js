import { useState } from 'react'
import Button from './evento/Button'


function Condicional(){
    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }

    
    return(
       <div>
        <h2> Cadastre Seu e-mail</h2>
        <form>
            <input 
                type="email" 
                placeholder="Digite o seu e-mail..."
                onChange={(e) => setEmail(e.target.value)}>
                
            </input>
            <Button type="submit" event={enviarEmail} text="Enviar e-mail"/>
        <br></br>


        {userEmail &&(
            <div>
                <p>o email do Usuário é: {userEmail}</p>
                <Button event={limparEmail} text="Limpar email"/>
            </div>
        )}

        
        </form>

       </div> 
    )

}

export default Condicional