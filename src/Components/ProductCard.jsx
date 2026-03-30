import React, { useState, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";

const ProductCard = ({ tool, handleAddToCart, checkoutTrigger }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(tool);
    setAdded(true); // Button text changes
  };

  // Reset button after checkout
  useEffect(() => {
    setAdded(false);
  }, [checkoutTrigger]);

  return (
    <div className="card border p-6 shadow-sm rounded-lg relative">
        {tool.image && (
    <img
      src={tool.image}
      alt={tool.name}
      className="w-16 h-16 object-cover rounded-full"
    />
  )}
      <p className="badge badge-warning absolute top-2 right-2">{tool.tagType}</p>
      <h2 className="text-2xl font-bold">{tool.name}</h2>
      <p className="text-gray-500 my-3">{tool.description}</p>
      <h3 className="text-xl font-semibold">
        ${tool.price}/{tool.period}
      </h3>

      <ul className="my-4 space-y-1">
        {tool.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <IoMdCheckmark className="text-green-500" /> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className={`btn rounded-full w-full ${
          added ? "bg-green-500 text-white" : "bg-purple-600 text-white"
        }`}
      >
        {added ? "Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;