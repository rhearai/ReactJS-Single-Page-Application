import React, { Component } from "react";
import { Route, Switch } from "react-router";

import a_logo from "./media/java.jpg"
import b_logo from "./media/c++.png"
import c_logo from "./media/python.png"

import {
    NavLink,
} from "react-router-dom";

class Container extends Component {
    render() {
        return (
           <div>
               <div className="card">
                        <h1><NavLink to="/java">Java</NavLink></h1>
                        <img src={a_logo} className="img-class" alt="java-img" />
                        <p> Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.</p>
                        <div>Date: 11/24/2019</div>
                    </div>
                    <div className="card">
                        <h1><NavLink to="/cplus">C++</NavLink></h1>
                        <img src={b_logo} className="img-class" alt="cplus-img" />

                        <p> C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes</p>
                        <div>Date: 11/24/2019</div>
                    </div>
                    <div className="card">
                        <h1><NavLink to="/python">Python</NavLink></h1>
                        <img src={c_logo} className="img-class" alt="python-img" />
                        <p>Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. </p>
                        <div>Date: 11/24/2019</div>
                    </div>
           </div>
        );
    }
}

export default Container;