import React from "react";

import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';

import { Link } from "react-router-dom";

export default function Loginadmin() {
    return (
        <form className="login">
            <div className="btn-usuarioloja">
                <Link to="/registrar_relatorio">
                    <button type="submit" className="btn-cian">USUÁRIO LOJA</button>
                </Link>
            </div>
            <div className="btn-administrador">
                <button className="btn-cian" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">ADMINISTRADOR</button>
            </div>
            <div className="collapse senha" id="collapseExample">
                <div className="senha-administrador">
                    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Senha"></input>
                </div>
                <div className="btn-login">
                    <Link to="/administrativo">
                        <button type="submit" className="btn-login">Login</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}