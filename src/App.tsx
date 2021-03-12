import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import state from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    <Profile/>
                    {/*<Dialogs />*/}
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
