import React from "react";

import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';

import { Link } from "react-router-dom";

export default function Loginadmin() {
    return (
        <form className="login">
            <div class="btn-usuarioloja">
                <Link to="/registrar_relatorio">
                    <button type="submit" class="btn-cian">USUÁRIO LOJA</button>
                </Link>
            </div>
            <div class="btn-administrador">
                <button class="btn-cian" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">ADMINISTRADOR</button>
            </div>
            <div className="collapse senha" id="collapseExample">
                <div class="senha-administrador">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Senha"></input>
                </div>
                <div class="btn-login">
                    <Link to="/administrativo">
                        <button type="submit" class="btn-login">Login</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}