import React, {Component} from 'react';
import '../_css/aboutus.css';
export default class AboutUs extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return [
            <h1>Acerca de Nosotros:</h1>,
            <p>Somos una empresa especializada en sistemas de refrigeracion de aire acondicionado</p>,
            <h1>Misión</h1>,
            <p>
                Nuestra misión es ser, desde el inicio hasta el final del proceso productivo, es decir; desde la creación, el armado, la instalación y la reparación de los sistemas de Refrigeración y Aire Acondicionado. Que nuestros clientes sientan que somos su mejor inversión, para cumplir con esta misión, nuestra empresa se orienta a la búsqueda constante de un mejor servicio a nuestros clientes, a través de una atención preferencial desde el área comercial e industrial.
            </p>,
            <h1>Visión</h1>,
            <p>
                Lograr ser una empresa exitosa, líder en el mercado de la Refrigeración y Aire Acondicionado al igual con  el servicio a nuestros clientes. Consolidarnos y desarrollarnos a través de todo el país, como una empresa sólida, competente, innovadora, altamente competitiva y abrir nuestras fronteras a mercados internacionales. Así como también, permanecer como la gran familia, que hemos sido hasta ahora.
            </p>

        ];
    }

}
