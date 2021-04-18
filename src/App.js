import "./App.css";
import "./index.css";
import Home from "./Home";
import About from "./About";
import SinglePost from "./SinglePost";
import Post from "./Post";
import Project from "./Project";
import NavBar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/About" />
        <Route component={SinglePost} path="/SinglePost" />
        <Route component={Post} path="/Post" />
        <Route component={Project} path="/Project" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
