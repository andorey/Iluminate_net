import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";


function App() {
    return (
        <div className="App">
            <Header />
            <div className="nav">
                <div>message</div>
                <div>music</div>
                <div>text</div>
            </div>
            <div className="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cupiditate.</div>
            <div className="footer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, tempore.</div>
        </div>
    );
}

export default App;
