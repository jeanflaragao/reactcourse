import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log('Reducer de números...')
        return { min: 7, max: 31 }
    },
    nomes: function (state, action) {
        console.log('Reducer de nomes...')
        return ['Ana', 'Bia', 'Carlos']
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig