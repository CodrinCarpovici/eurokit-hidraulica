import "./App.scss";

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import Products from "./components/Products/Products";
import sphereCylinders from "./components/Series/sphereCylinders";
import sphereCylindersSeriesP from "./components/Series/sphereCylindersSeriesP";
import sphereCylindersSeriesQ from "./components/Series/sphereCylindersSeriesQ";
import eyeCylinders from "./components/Series/eyeCylinders";
import eyeCylindersSeriesP from "./components/Series/eyeCylindersSeriesP";
import underNutCylinders from "./components/Series/underNutCylinders";

import Accessories from "./components/Accessories/Accessories";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";

//Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//ROUTER
import { Switch, Route } from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <Navbar />

      {/* SEARCH */}
      <Search />

      {/* ROUTES */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />

        <Route path="/products" component={Products} />
        <Route path="/sphereCylinders" component={sphereCylinders} />
        <Route
          path="/sphereCylindersSeriesP"
          component={sphereCylindersSeriesP}
        />
        <Route
          path="/sphereCylindersSeriesQ"
          component={sphereCylindersSeriesQ}
        />
        <Route path="/eyeCylinders" component={eyeCylinders} />
        <Route path="/eyeCylindersSeriesP" component={eyeCylindersSeriesP} />
        <Route path="/underNutCylinders" component={underNutCylinders} />

        <Route path="/accessories" component={Accessories} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
