function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return  `Olá, ${algumNome} Saudacao!`
    }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
    
    
}

export default Saudacao