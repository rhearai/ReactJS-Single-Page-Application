import React, { Component } from "react";
import a_logo from "./media/java.jpg"

class Java extends Component {
  render() {
    return (
      <div className="card">
        
        <h1>Java</h1>
        <img src={a_logo} className="react-logo" alt="react_logo" />

        <p>Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.</p>
        <div>Date: 11/24/2019</div>
      </div>
    );
  }
}

export default Java; 