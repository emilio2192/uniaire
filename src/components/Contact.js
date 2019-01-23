import React, {Component} from 'react';
import '../_css/contact.css';
import '../_css/button.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            subject: "",
            email: "",
            phone: "",
            message: ""
        };
    }

    keyInputChange = (event, clave) => {
        let object = {clave: event.target.value};
        this.setState(object);
        switch (clave) {
            case 'name':
                this.setState({name: event.target.value});
                break;
            case 'subject':
                this.setState({subject: event.target.value});
                break;
            case 'email':
                this.setState({email: event.target.value});
                break;
            case 'phone':
                this.setState({phone: event.target.value});
                break;
            case 'message':
                this.setState({message: event.target.value});
                break;
        }
        this.forceUpdate();
    }
    submit = () => {

        const axios = require('axios');
        const data = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        };
        const queryString = this.jsonToQueryString(data);
        axios.post('//uniaire.com.gt/email/index.php'+queryString, data ).then(response => {
            console.log(response);
            if(response.status===200){
                window.location = '//uniaire.com.gt';
            }
        }).catch(err => {
            console.info("error", err)
        });
    }

    jsonToQueryString(json) {
        return '?' +
            Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }).join('&');
    }

    render() {
        return [
            <h1>Contáctanos</h1>,
            <div className="form-container">
                <div className="row-input">
                    <label>Nombre Completo:</label>
                    <input type="text" placeholder="Nombre Completo"
                           onKeyUp={(event) => this.keyInputChange(event, "name")}/>
                </div>
                <div className="row-input">
                    <label>Correo Electrónico:</label>
                    <input type="text" placeholder="Correo"
                           onKeyUp={(event) => this.keyInputChange(event, "email")}/>
                </div>
                <div className="row-input">
                    <label>Teléfono:</label>
                    <input type="text" placeholder="Teléfono"
                           onKeyUp={(event) => this.keyInputChange(event, "phone")}/>
                </div>
                <div className="row-input">
                    <label>Asunto:</label>
                    <input type="text" placeholder="Asunto"
                           onKeyUp={(event) => this.keyInputChange(event, "subject")}/>
                </div>
                <div className="row-input">
                    <label>Mensaje:</label>
                    <textarea type="text" placeholder="Mensaje"
                              onKeyUp={(event) => this.keyInputChange(event, "message")}/>
                </div>
                <div className="row-input">
                    <div className="container-button">
                        <a href="javascript:void(0);" className="fancy-button medium rounded alizarin zoom expand"
                           onClick={this.submit}>
                            Enviar
                        </a>
                    </div>
                </div>
            </div>,
            <div className="location-container">
                Sede Central: 3c B 3-11 Zona 4 de Mixco Colonia Monte verde<br/>
                Telefonos: 5179-1935<br/>
                {'Correo: jrodriguez@uniaire.com.gt'}
            </div>


        ];
    }

}
