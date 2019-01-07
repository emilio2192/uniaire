import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import Foto1 from '../images/carousel/automatizacion.png';
export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return [
            <h1>Uni Aire</h1>,
            <Carousel>
                <div>
                    <img src={Foto1} />

                </div>
            </Carousel>
        ];
    }
}
