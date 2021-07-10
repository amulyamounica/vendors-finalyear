import logo from "./logo.svg";
import Header from "./header";
import react, { useState } from "react";
import "./App.css";
import Home from "./home";
import Login from "./login";
import Items from "./Items";
import addItem from "./addItem";
import Profile from "./profile";
import Orders from "./Orders";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
  Link,
} from "react-router-dom";
import Logout from "./logout";
function App() {
  var p = false;
  if (
    localStorage.getItem("session1") != "user" &&
    localStorage.getItem("session1") != null
  ) {
    p = true;
  }
  const [login, setLogin] = useState(p);
  const updateLogin = () => {
    console.log("coming to login function");
    setLogin(true);
  };
  return (
    <div className="App">
      <Header login={login} />
      <Router>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route
            path="/Login"
            component={(props) => <Login updateLogin={() => updateLogin()} />}
          />
          <Route path="/items" component={Items} />
          <Route path="/profile" component={Profile} />
          <Route path="/addItems" component={addItem} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
