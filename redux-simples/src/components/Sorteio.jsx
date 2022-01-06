import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
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