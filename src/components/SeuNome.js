function SeuNome({setNome}) {

    return (
        <div>
            <p>Digite seu nome:</p>
            <input 
                type="text"
                placeholder="Qual é o seu nome?"
                // setNome(), veio do argumento/props da função SetNome
                onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome