import Item from "./Item"

function Lista() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1965}/>
                <Item marca="Fiat" ano_lancamento={1960}/>
                <Item marca="Renault" ano_lancamento={1980}/>
                <Item />
            </ul>
        </>
    )
}

export default Lista