import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import { CartView } from "./components/CartView/CartView";
import { Company } from "./components/Company/Company";
import { ProductListContainer } from "./components/ProductListContainer/ProductListContainer";
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer";
import { Checkout } from "./components/Checkout/Checkout";
import { useContext } from "react";
import { UserAuthContext } from "./context/UserAuthContext";
import { LoginView } from "./components/LoginView/LoginView";
import { HomeView } from "./components/HomeView/HomeView";
import { Footer } from "./components/Footer/Footer";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  const {isAuthenticated} = useContext(UserAuthContext)

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>

            <Route exact path="/login">
                <LoginView />
            </Route>
            
            <Route exact path="/about-us">
              <AboutUs />
            </Route>

            <Route exact path="/company/:companyName">
              <Company />
            </Route>

            <Route exact path="/category/:categoryId">
              <ProductListContainer />
            </Route>
            {
              isAuthenticated===true?
              <>
                <Route exact path="/company/:companyName/:productId">
                <ProductDetailContainer />
                </Route>

                <Route exact path="/checkout">
                  <Checkout />
                </Route>

                <Route exact path="/cart">
                  <CartView />
                </Route>
              </>
              :
              <>
                <Redirect to="/login" />
                <LoginView />
              </>
            }

          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
