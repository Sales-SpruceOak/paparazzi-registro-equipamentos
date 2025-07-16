import React from "react";
import Header from "../componentes/Header";

const ErrorPage = () => {
    return (
        <div className="erro">
            <Header conteudo="ERROR 404" />
            <a href="/">
                <div className="Error404">
                    Página não encontrada<br/>
                    Clique <a href="/">aqui</a> para voltar ao menu principal.
                </div>
            </a>
            <div className='bordaFixa'></div>
        </div>
    )
}

export default ErrorPage