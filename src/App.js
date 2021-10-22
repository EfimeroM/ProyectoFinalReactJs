import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { CartView } from "./components/CartView/CartView";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:categoryId">
              <ItemListContainer rutaImg="../"/>
            </Route>

            <Route exact path="/detail/:detailId">
              <ItemDetailContainer />     
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
