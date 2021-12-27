import "./App.scss";

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

//Products
import Products from "./components/Products/Products";
import sphereCylinders from "./components/Series/sphereCylinders";
import sphereCylindersSeriesP from "./components/Series/sphereCylindersSeriesP";
import sphereCylindersSeriesQ from "./components/Series/sphereCylindersSeriesQ";
import eyeCylinders from "./components/Series/eyeCylinders";
import eyeCylindersSeriesP from "./components/Series/eyeCylindersSeriesP";
import underNutCylinders from "./components/Series/underNutCylinders";

//Accessories
import Accessories from "./components/Accessories/Accessories";
import cots from "./components/Accessories/cots";
import closedSupports from "./components/Accessories/closedSupports";
import openSupports from "./components/Accessories/openSupports";
import strokeValve from "./components/Accessories/strokeValve";
import directionalValve from "./components/Accessories/directionalValve";
import directionalHydraulicValve from "./components/Accessories/directionalHydraulicValve";
import nutsKit from "./components/Accessories/nutsKit";
import gasketKit from "./components/Accessories/gasketKit";
import guideRingKit from "./components/Accessories/guideRingKit";

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
        <Route path="/Cots" component={cots} />
        <Route path="/ClosedSupports" component={closedSupports} />
        <Route path="/OpenSupports" component={openSupports} />
        <Route path="/EndOFStrokeValve" component={strokeValve} />
        <Route path="/DirectionalSolenoidValves" component={directionalValve} />
        <Route
          path="/DirectionalHydraulicsValves"
          component={directionalHydraulicValve}
        />
        <Route path="/NutsKit" component={nutsKit} />
        <Route path="/GasketKit" component={gasketKit} />
        <Route path="/GuideRingKit" component={guideRingKit} />

        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
