import React, { Component } from "react";
import { Route, Switch } from "react-router";

import {
    NavLink,
    HashRouter
} from "react-router-dom";
import Python from "./python";
import C_Plus from "./c++";
import Java from "./java";
import Container from "./Container";

class Main_C extends Component {
    render() {
        return (
            <HashRouter>
                <div className="left">
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Container} />
                            <Route path="/cplus" component={C_Plus} />
                            <Route path="/python" component={Python} />
                            <Route path="/java" component={Java} />
                        </Switch>
                    </div>


                </div>
            </HashRouter>
        );
    }
}

export default Main_C;