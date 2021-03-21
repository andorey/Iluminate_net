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
import {Settings} from "./components/Settings";

type PostsType = {
    id: string
    post: string
    likesCount: number
}
type ProfilePageType = {
    posts: PostsType[]
    aboutMe: string[]
    myPhoto: string
}
type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type SidebarType = {}

type NewsType = {
    news: string[]
}
type MusicType = {
    music: string[]
}
type SettingsType = {
    settings: string[]
}
type RootStateTypes = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    newsPage: NewsType
    musicPage: MusicType
    settingsPage: SettingsType
}
type StateType = {
    state: RootStateTypes
}

function App(props: StateType) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    <Route path={'/profile'}>
                        <Profile profileData={props.state.profilePage}/>
                    </Route>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogsData={props.state.dialogsPage} />
                    </Route>
                    <Route path={'/news'} render={ () => <News newsData={props.state.newsPage}/> }/>
                    <Route path={'/music'} render={ () => <Music musicData={props.state.musicPage}/> }/>
                    <Route path={'/settings'} component={ () => <Settings settingsData={props.state.settingsPage}/> }/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;