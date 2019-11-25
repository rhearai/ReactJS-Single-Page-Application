import React, { Component } from "react";
import {
    NavLink,
    HashRouter

} from "react-router-dom";
 import Header from "./Header";
 import Footer from "./Footer";
 import News from "./News";
 import Main_C from "./Main_C";

class Main extends Component {
  render() {
    return (
        <div>
          <Header/>
          <h1>Buzzworthy programming Languages!</h1>
                
                <HashRouter><NavLink to="/" className="nav">Home</NavLink></HashRouter>

          <div className="flex">
            <Main_C></Main_C>
            <News></News>
          </div>
          <Footer></Footer>
        </div>
    );
  }
}
 
export default Main;