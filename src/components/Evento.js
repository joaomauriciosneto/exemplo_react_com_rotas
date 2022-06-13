// é opcional a parâmetro na função, apenas para mostrar que é possível
// utilizar.
import Button from './evento/Button'

function Evento() {

    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento!`)
    }

    return (
        <div>
            <p>Clique para disparar evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento