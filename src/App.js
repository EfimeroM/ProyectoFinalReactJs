import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import { CartView } from "./components/CartView/CartView";
import { Navhistory } from "./components/NavHistory/Navhistory";
import { CompanyList } from "./components/CompanyBanner/CompanyList";
import { Company } from "./components/Company/Company";
import { ProductListContainer } from "./components/ProductListContainer/ProductListContainer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Navhistory />
          <Switch>
            <Route exact path="/">
              <CompanyList />
            </Route>

            <Route exact path="/company/:companyName">
              <Company />
            </Route>
            <Route exact path="/company/:companyName/:productId">
              <ProductListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ProductListContainer />
            </Route>

            <Route exact path="/cart">
              <CartView />
            </Route>

            <Route exact path="/releases">
              <h2>Lanzamientos</h2>
            </Route>

            <Route exact path="/about-us">
              <h2>Sobre Nosotros</h2>
            </Route>

          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
