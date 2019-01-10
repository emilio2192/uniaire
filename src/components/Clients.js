import React, {Component} from 'react';
import '../_css/clients.css';

export default class Clients extends Component {
    constructor(props) {
        super(props);
        const path = require('path');
        const clients = [
            {
                name: 'Artemis',
                directory: '../images/clients/artemis/',
                logo: <img alt="logo" src={require('../images/clients/artemis/logo.png')}/>,
                numImages: 3,
                images: []
            },
            {
                name: 'Arturo',
                directory: '../images/clients/arturo/',
                logo: <img alt="logo" src={require('../images/clients/arturo/logo.png')}/>,
                numImages: 6,
                images: []
            },
            {
                name: 'Cinepolis',
                directory: '../images/clients/cinepolis/',
                logo: <img alt="logo" src={require('../images/clients/cinepolis/logo.png')}/>,
                numImages: 4,
                images: []
            },
            {
                name: 'Colgate',
                directory: '../images/clients/colgate/',
                logo: <img alt="logo" src={require('../images/clients/colgate/logo.png')}/>,
                numImages: 4,
                images: []
            },
            {
                name: 'Enel Green Power',
                directory: '../images/clients/Enel_Green_Power/',
                logo: <img alt="logo" src={require('../images/clients/Enel_Green_Power/logo.png')}/>,
                numImages: 7,
                images: []
            },
            {
                name: 'Ingenio Pantaleon',
                directory: '../images/clients/Ingenio_Pantaleon/',
                logo: <img alt="logo" src={require('../images/clients/Ingenio_Pantaleon/logo.png')}/>,
                numImages: 11,
                images: []
            },
            {
                name: 'Miraflores',
                directory: '../images/clients/miraflores/',
                logo: <img alt="logo" src={require('../images/clients/miraflores/logo.png')}/>,
                numImages: 8,
                images: []
            },
            {
                name: 'Naranjo',
                directory: '../images/clients/naranjo/',
                logo: <img alt="logo" src={require('../images/clients/naranjo/logo.png')}/>,
                numImages: 5,
                images: []
            },
            {
                name: 'Rooftop Oakland Mall',
                directory: '../images/clients/rooftop_oakland_mall/',
                logo: <img alt="logo" src={require('../images/clients/rooftop_oakland_mall/logo.png')}/>,
                numImages: 5,
                images: []
            },
            {
                name: 'Oakland Mall',
                directory: '../images/clients/oakland_mall/',
                logo: <img alt="logo" src={require('../images/clients/oakland_mall/logo.png')}/>,
                numImages: 14,
                images: []
            },
            {
                name: 'Portales',
                directory: '../images/clients/portales/',
                logo: <img alt="logo" src={require('../images/clients/portales/logo.png')}/>,
                numImages: 10,
                images: []
            },
            {
                name: 'San Rafael',
                directory: '../images/clients/san_rafael/',
                logo: <img alt="logo" src={require('../images/clients/san_rafael/logo.png')}/>,
                numImages: 10,
                images: []
            },
            {
                name: 'Trecsa',
                directory: '../images/clients/trecsa/',
                logo: <img alt="logo" src={require('../images/clients/trecsa/logo.png')}/>,
                numImages: 5,
                images: []
            },
            {
                name: 'Vedex',
                directory: '../images/clients/vedex/',
                logo: <img alt="logo" src={require('../images/clients/vedex/logo.png')}/>,
                numImages: 12,
                images: []
            }

        ];

        console.log(clients);
        this.state = {clients: clients};
    }

    componentDidMount() {

    }

    clientsRender = () => {
        let response = [];
        for (let i = 0; i < this.state.clients.length; i++) {
            let client = this.state.clients[i];
            console.log(`${client.logo}`);
            let pathImg = client.logo;
            response.push(<li className="item">{client.logo}</li>);
        }
        return response;
    };

    render() {

        return [
            <h1>Nuestros Clientes</h1>,
            <div className="container-clients">
                <ul className="grid">
                    {
                        this.clientsRender()
                    }

                </ul>
            </div>
        ];
    }

}
