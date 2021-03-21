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

type RootStateTypes = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type stateType = {
    state: RootStateTypes
}

function App(props: stateType) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    <Route path={'/profile'}>
                        <Profile profile={props.state.profilePage.posts}
                                 aboutMe={props.state.profilePage.aboutMe}
                                 myPhoto={props.state.profilePage.myPhoto}/>
                    </Route>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                 messages={props.state.dialogsPage.messages}/>
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