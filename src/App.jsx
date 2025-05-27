import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfileCard from "./components/ProfileCard";
import ProductList from "./components/ProductList";
import Carousel from "./components/Carousel";
import CounterApp from "./components/CounterApp";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/counter" element={<CounterApp />} />
      </Routes>
    </>
  );
};

export default App;
