import React from 'react'

import Header from '../componentes/Header'
import { Link } from "react-router-dom";

const Cadastro = () => {
    return (
        <div className='cadastro'>
            <div className="container-sm">
                <Header conteudo="CADASTRO" />
                <button type="button"className="btn btn-light largeb">FUNCIONÁRIOS</button>
                <button type="button"className="btn btn-light largeb">ESTADOS</button>
                <button type="button"className="btn btn-light largeb">LOJAS</button>
                <button type="button"className="btn btn-light largeb">CÂMERA</button>
                <button type="button"className="btn btn-light largeb">CARTÃO DE MEMÓRIA</button>
                <button type="button"className="btn btn-light largeb">BATERIA</button>
            </div>
        </div>
    )
}

export default Cadastro