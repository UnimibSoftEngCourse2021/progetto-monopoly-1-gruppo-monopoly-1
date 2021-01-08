import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import Menu from '../Menu';
import reportWebVitals from '../reportWebVitals';

function iniziaPartita(modalita) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default iniziaPartita
