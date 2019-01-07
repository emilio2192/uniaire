import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
class App extends Component {
    render() {
        return [
            <Header />,
            <Main />
        ];
    }
}

export default App;