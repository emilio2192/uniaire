import React, {Component} from 'react';
import '../_css/clients.css';
export default class Clients extends Component{
    constructor(props) {
        super(props);
        const path = require('path');
        const clients = [
            {
                name: 'Artemis',
                directory: '/clients/artemis/',
                numImages: 3,
                images : []
            },
            {
                name: 'Arturo',
                directory: '/clients/arturo/',
                numImages: 6,
                images : []
            },
            {
                name: 'Cinepolis',
                directory: '/clients/cinepolis/',
                numImages: 4,
                images : []
            }
        ];
        const img = require('../../public/clients/artemis/0.jpg');
       /* for(let i = 0; i < clients.length; i++){
            for(let j = 0; j < clients[i].numImages; j++){
                let img = require(path.resolve(clients[i].directory+""+j+".jpg"));
                console.log(path.resolve(clients[i].directory+""+j+".jpg"));

                //clients[i].images.push(img);
            }
        }*/
        console.log(clients);
        this.state = {clients: clients};
    }
    render() {
        return [
            <h1>Nuestros Clientes</h1>,
            <div className="container-clients">
                <ul className="grid">
                    <li className="item"></li>
                </ul>
            </div>
        ];
    }

}
