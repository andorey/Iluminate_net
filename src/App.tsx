import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import state from "./Redux/state";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    <Route path={'/profile'}>
                        <Profile profile={state.profilePage.posts}
                                 aboutMe={state.profilePage.aboutMe}
                                 myPhoto={state.profilePage.myPhoto}/>
                    </Route>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogs={state.dialogsPage.dialogs}
                                 messages={state.dialogsPage.messages}/>
                    </Route>
                    <Route path={'/news'} render={ () => <News /> }/>
                    <Route path={'/music'} render={ () => <Music /> }/>
                    <Route path={'/settings'} component={ () => <Settings /> }/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;