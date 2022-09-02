import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Spaceships from "./pages/Spaceships";
import { useReducer } from "react";
import { cartReducer, initialState } from "./store/cart/reducer";
import { CartContext } from "./store/cart/context";

function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const contextValue = {
    cartState: cartState,
    cartDispatch: dispatch,
  };
  // const lastMoonIndex = cartState.products.length - 1;

  return (
    <CartContext.Provider value={contextValue}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
              // moon={cartState.products[lastMoonIndex]}
              />
            }
          />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/spaceships" element={<Spaceships />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
