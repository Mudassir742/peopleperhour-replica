import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Projects/Projects";
import Signup from "./component/Signup/Signup";
import Login from "./component/Login/Login";
import Infobar from "./component/Infobar/Infobar";

function App() {
  return (
    <div className="App">
      <Infobar />
      <Navbar />

      <Switch>
        <Route path="/" component={Signup} exact />
        <Route path="/Login" component={Login} exact />
        <Route path="/Projects" component={Projects} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
