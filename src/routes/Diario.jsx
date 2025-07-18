import React from "react";

import Selecao from "../componentes/Selecao";

import PopupCamera from "../componentes/PopupCamera";
import PopupBateria from "../componentes/PopupBateria";
import PopupCartao from "../componentes/PopupCartao";

import Header from "../componentes/Header";

const Diario = () => {
    return (
        <div className="diario">
            <div className="container-sm">

                <Header conteudo="REGISTRO DE EQUIPAMENTOS DE ABERTURA DE LOJA" />

                <Selecao titulo='Selecione o Estado' selecionado='RN' type="largeS form-select" />
                <Selecao titulo='Selecione a Loja' selecionado='Hotel Serhs' type="largeS form-select" />
                <Selecao titulo='Responsável pelo Relatório' selecionado='Sales' type="largeS form-select" />
                <PopupCamera />
                <PopupCartao />
                <PopupBateria />



                <button type="button" className="btn btn-success largeb" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    CONFIRMAR INFORMAÇÕES
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">CONFIRMAR INFORMAÇÕES</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>Estado Selecionado:</h5> RN
                                <br />
                                <h5>Loja Selecionada:</h5> Hotel Serhs
                                <br />
                                <h5>Responsável pelo Relatório:</h5> Sales
                                <h5>Cameras Registradas:</h5> Camera Serhs 01
                                <h5>Cartões SD Registrados:</h5> Cartão Serhs 01
                                <h5>Baterias Registradas:</h5> Bateria Serhs 01
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                                <button type="button" className="btn btn-primary">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diario