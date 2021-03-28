import {RootStateTypes} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const RenderTree = (state: RootStateTypes) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>, document.querySelector('#root')
    )
}