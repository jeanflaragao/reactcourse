import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Media = props => {
    return (
        <Card title="Média dos números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(props.numeros.min + props.numeros.max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Media)