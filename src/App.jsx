import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Aitool from "./Components/Aitool";
import { useState } from "react";
import StepsSection from "./Components/StepsSection";


function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Aitool cart={cart} setCart={setCart} />
      <StepsSection/>
    </>
  );
}

export default App;