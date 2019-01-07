import React, {Component} from 'react';
import '../_css/contact.css';
import '../_css/button.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h1>Contáctanos</h1>,
            <div className="form-container">
                <div className="row-input">
                    <label>Nombre Completo:</label>
                    <input type="text" placeholder="Nombre Completo"/>
                </div>
                <div className="row-input">
                    <label>Asunto:</label>
                    <input type="text" placeholder="Asunto"/>
                </div>
                <div className="row-input">
                    <label>Mensaje:</label>
                    <textarea type="text" placeholder="Mensaje"/>
                </div>
                <div className="row-input">
                    <div className="container-button">
                        <a href="#" className="fancy-button medium rounded alizarin zoom expand">
                            Enviar
                        </a>
                    </div>
                </div>
            </div>,
            <div className="location-container">
                Sede Central: Mixco<br/>
                Telefonos: 5431-2346 / 2315-8844<br/>
                {'Correo: info@uniaire.com.gt'}
            </div>


        ];
    }

}
