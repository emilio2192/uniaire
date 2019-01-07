import React, {Component} from 'react';

import '../_css/header.css';

import Logo from '../images/logo.png';
import { Link } from "react-router-dom";


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <nav>
                <a href="/" className="logo">
                    <img src={Logo}/>
                </a>
                <div className="container-menu">
                    <ul className="menu-desktop">
                        <li>
                            <Link to="/">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/nosotros">
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicios">
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        ];
    }

}
