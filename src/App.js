import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import Header from "./components/header";
import Home from "./components/home";
import Cart from "./components/cart";
import Profile from "./components/profile";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
