import React, {Component} from 'react';
import '../_css/clients.css';
import {Carousel} from 'react-responsive-carousel';


export default class Clients extends Component {
    constructor(props) {
        super(props);
        const path = require('path');
        const clients = [
            {
                name: 'Artemis',
                directory: 'http://uniaire.com.gt/clients/artemis/',
                logo: <img alt="logo" src={require('../images/clients/artemis/logo.png')}/>,
                numImages: 3,
                images: []
            },
            {
                name: 'Arturo',
                directory: 'http://uniaire.com.gt/clients/arturo/',
                logo: <img alt="logo" src={require('../images/clients/arturo/logo.png')}/>,
                numImages: 6,
                images: []
            },
            {
                name: 'Cinepolis',
                directory: 'http://uniaire.com.gt/clients/cinepolis/',
                logo: <img alt="logo" src={require('../images/clients/cinepolis/logo.png')}/>,
                numImages: 4,
                images: []
            },
            {
                name: 'Colgate',
                directory: 'http://uniaire.com.gt/clients/colgate/',
                logo: <img alt="logo" src={require('../images/clients/colgate/logo.png')}/>,
                numImages: 4,
                images: []
            },
            {
                name: 'Enel Green Power',
                directory: 'http://uniaire.com.gt/clients/Enel_Green_Power/',
                logo: <img alt="logo" src={require('../images/clients/Enel_Green_Power/logo.png')}/>,
                numImages: 7,
                images: []
            },
            {
                name: 'Ingenio Pantaleon',
                directory: 'http://uniaire.com.gt/clients/Ingenio_Pantaleon/',
                logo: <img alt="logo" src={require('../images/clients/Ingenio_Pantaleon/logo.png')}/>,
                numImages: 11,
                images: []
            },
            {
                name: 'Miraflores',
                directory: 'http://uniaire.com.gt/clients/miraflores/',
                logo: <img alt="logo" src={require('../images/clients/miraflores/logo.png')}/>,
                numImages: 8,
                images: []
            },
            {
                name: 'Naranjo',
                directory: 'http://uniaire.com.gt/clients/naranjo/',
                logo: <img alt="logo" src={require('../images/clients/naranjo/logo.png')}/>,
                numImages: 5,
                images: []
            },
            {
                name: 'Rooftop Oakland Mall',
                directory: 'http://uniaire.com.gt/clients/rooftop_oakland_mall/',
                logo: <img alt="logo" src={require('../images/clients/rooftop_oakland_mall/logo.png')}/>,
                numImages: 5,
                images: []
            },
            {
                name: 'Oakland Mall',
                directory: 'http://uniaire.com.gt/clients/oakland_mall/',
                logo: <img alt="logo" src={require('../images/clients/oakland_mall/logo.png')}/>,
                numImages: 14,
                images: []
            },
            {
                name: 'Portales',
                directory: 'http://uniaire.com.gt/clients/portales/',
                logo: <img alt="logo" src={require('../images/clients/portales/logo.png')}/>,
                numImages: 10,
                images: []
            },
            {
                name: 'San Rafael',
                directory: 'http://uniaire.com.gt/clients/san_rafael/',
                logo: <img alt="logo" src={require('../images/clients/san_rafael/logo.png')}/>,
                numImages: 10,
                images: []
            },
            {
                name: 'Trecsa',
                directory: 'http://uniaire.com.gt/clients/trecsa/',
                logo: <img alt="logo" src={require('../images/clients/trecsa/logo.png')}/>,
                numImages: 5,
                images: []
            },
            {
                name: 'Vedex',
                directory: 'http://uniaire.com.gt/clients/vedex/',
                logo: <img alt="logo" src={require('../images/clients/vedex/logo.png')}/>,
                numImages: 12,
                images: []
            }

        ];

        console.log(clients);
        this.state = {clients: clients, carrousel: null, clientSelected: 0, modalShow: false};
    }

    componentDidMount() {

    }

    initCarrousel = (index) => {
        console.log('index select', this.state.clientSelected);
        const clients = this.state.clients;
        let images = [];
        for (let i = 0; i < clients[index].numImages; i++) {
            images.push(<div><img className="imagesCarrousel" src={clients[index].directory + '' + i + '.jpg'}/></div>)
        }
        return <Carousel autoPlay infiniteLoop="true" dynamicHeight="true" >{images}</Carousel>;
    }
    openModal = (event, index) => {
        console.log(index);
        this.setState({clientSelected: index, modalShow: true});
        this.forceUpdate();
    }
    clientsRender = () => {
        let response = [];
        for (let i = 0; i < this.state.clients.length; i++) {
            let client = this.state.clients[i];
            console.log(`${client.logo}`);
            let pathImg = client.logo;
            response.push(<li className="item" onClick={(event) => this.openModal(event, i)}>{client.logo}</li>);
        }
        return response;
    };
    closeModal = () => {
        this.setState({modalShow: false});
        this.forceUpdate();
    };
    renderModal = () => {
        if (this.state.modalShow) {
            return <div className="modal-detail">
                <div className="modal-container">
                    <div className="close-container">
                        <a href="javascript:void(0);" onClick={(event) => this.closeModal()} className="close">X</a>
                    </div>
                    <div className="modal-content">
                        {this.initCarrousel(this.state.clientSelected)}
                    </div>
                </div>
            </div>
        } else {
            return <div></div>
        }
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
            </div>,
            <div className="container-modal">
                {
                    this.renderModal()
                }
            </div>
        ];
    }

}
