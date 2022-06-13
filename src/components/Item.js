import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0
}

// para acessar a propriedade, a primeria letra do propTypes, tem q ser
// minúscula.
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento : PropTypes.number
}

export default Item