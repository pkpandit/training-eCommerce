import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      {/* <Home /> */}
      {/* <About /> */}
      <Category />
      <Footer />
    </>
  );
}

export default App;
