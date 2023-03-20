import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Bienvenido from "./components/Bienvenido";
import ShoppingCartContext from "./context/ShoppingCartContext";
import UtilsContext from "./context/UtilsContext";
import FinishedOrder from "./components/FinishedOrder";

const App = () => {
  return (
    <UtilsContext>
      <ShoppingCartContext>
        <BrowserRouter>
          <NavBar />
          <Bienvenido />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route
              exact
              path="/finishedOrder/:orderId"
              element={<FinishedOrder />}
            />
          </Routes>
        </BrowserRouter>
      </ShoppingCartContext>
    </UtilsContext>
  );
};

export default App;
