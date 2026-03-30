import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Aitool from "./Components/Aitool";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  // Example getPromise function
  const getPromise = () => {
    return fetch("/data.json")
    .then(res => res.json());
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Aitool cart={cart} setCart={setCart} getPromise={getPromise} />
    </>
  );
}

export default App;