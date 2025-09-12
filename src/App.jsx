import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Header />

      {/* <Home /> */}
      {/* <About /> */}
      {/* <Category /> */}
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
      <Checkout />
      <Footer />
    </>
  );
}

export default App;
