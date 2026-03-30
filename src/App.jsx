import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Aitool from "./Components/Aitool";
import { useState } from "react";
import StepsSection from "./Components/StepsSection";
import PricingSection from "./Components/PricingSection";
import Ready from "./Components/Ready";
import Footer from "./Components/Footer";



function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Aitool cart={cart} setCart={setCart} />
      <StepsSection/>
      <PricingSection/>
      <Ready/>
      <Footer/>
    </>
  );
}

export default App;