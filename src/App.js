import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleItem from "./components/SingleItem/SingleItem";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<SingleItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
