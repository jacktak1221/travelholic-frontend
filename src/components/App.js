import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Menu from "./Menu";
import Content from "./Content";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Traveholic</h1>
                    <Menu/>
                    <Content/>
                </div>
            </HashRouter>
        );
    }
}


export default App;