import React from "react";

import Loginadmin from "../componentes/Login";
import Header from "../componentes/Header";

import LogoPaparazzi from "../assets/LogoPaparazziClaro.svg"

import UserIcon from "../assets/UsuarioIcon.svg"

const Home = () => {
    return (
        <div className="home">
            <div className="container-sm">
                <Header conteudo= {<img src={LogoPaparazzi} />} />
                <div className="hometitle">
                    REGISTO DE EQUIPAMENTOS ABERTURA LOJA
                </div>
                <div className="functionselect">
                <div className="selecione">
                    SELECIONE SUA FUNÇÃO
                </div>
                <img src={UserIcon} alt="." />
                </div>
                <Loginadmin />
            </div>
        </div>
    )
}

export default Home