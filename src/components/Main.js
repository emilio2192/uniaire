import React, {Component} from 'react';
import {
    Route,
} from 'react-router-dom';

import '../_css/main.css';
// components
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Clients from './Clients';

export default class Main extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return [

            <div className="main-container">
                <Route path="/"  component={Home} exact />
                <Route path="/nosotros" component={AboutUs} exact />
                <Route path="/servicios" component={Services} exact />
                <Route path="/clientes" component={Clients} exact />
                <Route path="/contacto" component={Contact} exact />
            </div>
        ];
    }
}
