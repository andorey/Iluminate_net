import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateTypes} from './redux/state'

type StateType = {
    state: RootStateTypes
}

function App(props: StateType) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header images={props.state.profilePage.header}/>
                <NavBar dataFriends={props.state.sideBar}/>
                <div className='App-wrapper-content'>
                    <Route path={'/profile'}> <Profile profileData={props.state.profilePage} /> </Route>
                    <Route path={'/dialogs'}> <Dialogs dialogsData={props.state.dialogsPage} /> </Route>
                    <Route path={'/news'}> <News newsData={props.state.newsPage} /> </Route>
                    <Route path={'/music'}> <Music musicData={props.state.musicPage} /> </Route>
                    <Route path={'/settings'}> <Settings settingsData={props.state.settingsPage} /> </Route>

                    {/*Also you can use this methods*/}
                    {/*<Route path={'/music'} render={ () => <Music musicData={props.state.musicPage}/> }/>*/}
                    {/*<Route path={'/settings'} component={ () => <Settings settingsData={props.state.settingsPage}/> }/>*/}

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;