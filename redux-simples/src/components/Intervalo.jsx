import './Intervalo.css'

import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { alterarMin } from '../store/actions/numeros'


function Intervalo(props) {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={props.min} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={props.max} />
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

const mapActionCreatorsToProp = (dispatch) => {
    return{
        blabla(novoNumero){
            //ActionCreator - Retornar uma action
            const action = alterarMin(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProsp, mapActionCreatorsToProp)(Intervalo)