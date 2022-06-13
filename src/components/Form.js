import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}.`)
    }

    // setName é usado para atribuir o valor
    // name é usado para resgatar o valor
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Usuário: </label>
                    <input 
                        type="text"
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        // inicia o input com o valor do useState('João')
                        // value={name}
                        onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password"
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form