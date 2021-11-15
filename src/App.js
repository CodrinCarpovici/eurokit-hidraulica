import "./App.scss";

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Accessories from "./components/Accessories/Accessories";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";

//Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//ROUTER
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Search />
      <Switch>  
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>       
      </>
    </div>
  );
}

export default App;
