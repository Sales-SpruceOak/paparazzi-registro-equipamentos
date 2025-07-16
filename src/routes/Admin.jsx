import React from 'react'

import '../scss/styles.scss'

import UserIcon from "../assets/UsuarioIcon.svg"

import Header from '../componentes/Header'

import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <div className="admin">
            <div className="container-sm">
                <Header conteudo="ADMINISTRATIVO" />
                <div className="functionselect functionadmin">
                    <img src={UserIcon} alt="." />
                </div>
                <div className="adminfuncoes">
                <div class="btn-admincadastro">
                    <Link to="/">
                        <button type="submit" class="btn-cian">CADASTRO</button>
                    </Link>
                </div>
                <div class="btn-adminrelatorios">
                    <Link to="/">
                        <button type="submit" class="btn-cian">RELATÓRIOS</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Admin