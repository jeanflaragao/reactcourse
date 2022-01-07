import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Soma (props){
    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{props.min + props.max}</strong>

                </span>
            </div>
        </Card>
    )
}

const mapStateToProsp = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProsp)(Soma)