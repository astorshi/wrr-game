import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UnitsContextProvider } from "./contexts/unitsContext";


ReactDOM.render(
    <React.StrictMode>
        <UnitsContextProvider>
            <App/>
        </UnitsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

