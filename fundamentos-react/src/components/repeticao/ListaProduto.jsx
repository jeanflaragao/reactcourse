import './ListaProduto.css'

import React from "react";
import produtos from '../../data/produtos'

export default function ListaProdutos (props){
    const rows = produtos.map((prod, i) => {
        return (
            <tr key={prod.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{prod.id}</td>
                <td>{prod.nome}</td>
                <td>{prod.valor}</td>
            </tr>
        )
    })
    return (
        <div  className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
                
            </table>
        </div>
    )
}