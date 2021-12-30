import React from "react";

export default props => {
    const cb = props.quandoClicar
    const min = 50 
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <div>Filho</div>
            <button onClick={ _ => cb('Antonio', gerarIdade(), true)}>
                Fornecer Informações</button>

        </div> 
    )
}