import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes'


export function alterarMin(novoNum){
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNum
    }
}

export function alterarMax(novoNum){
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNum
    }
}
