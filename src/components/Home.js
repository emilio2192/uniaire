import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import Foto1 from '../images/carousel/1.png';
import Foto2 from '../images/carousel/2.png';
import Foto3 from '../images/carousel/3.png';
export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return [
            <h1>Uni Aire</h1>,
            <Carousel autoPlay infiniteLoop="true" dynamicHeight="true">
                <div>
                    <img src={Foto1} />
                </div>
                <div>
                    <img src={Foto2} />
                </div>
                <div>
                    <img src={Foto3} />
                </div>
            </Carousel>
        ];
    }
}
