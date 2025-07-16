import React from 'react'

import Selecao from './Selecao'

import Editar from '../assets/EditIcon.svg'

const Card = ({ imagem, titulo, id, selecionado, numero, }) => {
    return (
        <div class="card">
            <div class="card-body">
                <Selecao
                    titulo={titulo}
                    id={id}
                    selecionado={selecionado}
                    type="form-select"
                />
                <a href="#" className='editar'>
                    <img src={Editar} />
                </a>
            </div>
            <div className="card-number">
                <h1>{numero}</h1>
            </div>
            <div className="card-icon">
                <img src={imagem} />
            </div>
        </div>
    )
}

export default Card