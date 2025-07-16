import React from "react";

import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';

import { Link } from "react-router-dom";

const Registrar = ({nome}) => {
    return (
        <Link to="/camera">
        <div>
            <button type="button" class="btn btn-secondary largeb">{nome}</button>
        </div>
        </Link>
    )
}

export default Registrar