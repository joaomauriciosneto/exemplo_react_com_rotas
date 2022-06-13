function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tudo bem?` 
    }

    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao
// o nome &&, é uma condicional (if), que só vai "funcionar", se tiver
// algum nome.
// {nome && <p>{gerarSaudacao(nome)}</p>}