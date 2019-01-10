import React, {Component} from 'react';

import '../_css/header.css';

import Logo from '../images/logo.png';
import { Link } from "react-router-dom";
import { MdMenu, MdClear } from 'react-icons/md';



export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {expand :false}
    }
    renderMenu(){
        if(this.state.expand){
            return <MdClear size="2em" />
        }else{
            return <MdMenu size="2em" />
        }

    }
    expandMenu = () =>{
        this.setState({expand: !this.state.expand});
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
                        {/* <li>
                            <Link to="/servicios">
                                Servicios
                            </Link>
                        </li>*/}
                        <li>
                            <Link to="/clientes">
                                Clientes
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    <div className="mobile-menu">
                        <div className="expand" onClick={this.expandMenu}>
                            {this.renderMenu()}
                        </div>
                        <ul className="menu-mobile">
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
                            {/* <li>
                                <Link to="/servicios">
                                    Servicios
                                </Link>
                            </li>*/}
                            <li>
                                <Link to="/clientes">
                                    Clientes
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        ];
    }

}
