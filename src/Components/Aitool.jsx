import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CartSection from "./CartSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Aitool = ({ cart, setCart }) => {
  const [tools, setTools] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutTrigger, setCheckoutTrigger] = useState(0);

  const handleCheckout = () => {
    setCart([]); // Clear cart
    setCheckoutTrigger((prev) => prev + 1); // Trigger ProductCard reset
    toast.success("Checkout complete");
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleAddToCart = (tool) => {
    setCart([...cart, tool]);
    toast.success("Added to cart");
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error("Removed from cart");
  };

 

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="text-5xl font-bold text-center mb-4">
        Premium Digital Tools
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Choose from premium digital products
      </p>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-10">
        <div className="join">
          <button
            onClick={() => setShowCart(false)}
            className={`btn join-item ${
              !showCart ? "bg-purple-600 text-white" : ""
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`btn join-item ${
              showCart ? "bg-purple-600 text-white" : ""
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Section Toggle */}
      {!showCart ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ProductCard
              key={tool.id}
              tool={tool}
              handleAddToCart={handleAddToCart}
              checkoutTrigger={checkoutTrigger}
            />
          ))}
        </div>
      ) : (
        <CartSection
          cart={cart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default Aitool;