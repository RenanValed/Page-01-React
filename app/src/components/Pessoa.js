import Style from './Pessoa.module.css'

function Pessoa({nome, idade, profissao, foto}){
    return<div className={Style.PessoaContainer}>
        <img src={foto} alt={nome}/>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade} </p>
        <p>Profissão: {profissao}</p>
    </div>
}
export default Pessoa