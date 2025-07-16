import React from "react";

import '../scss/styles.scss'

export default function Selecao ({titulo, id, selecionado, type}) {
    return (
        <div>
            <select className={type} aria-label="Large select example">
                <option selected>{titulo}</option>
                <option value={id}>{selecionado}</option>
            </select>
        </div>
    )
}