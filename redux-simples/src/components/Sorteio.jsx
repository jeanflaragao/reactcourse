import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Sorteio(props) {
    const { min, max } = props
    const ale = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um número" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ale}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps =(state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)