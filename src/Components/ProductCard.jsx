import React from "react";

import { IoMdCheckmark } from "react-icons/io";


const ProductCard = ({ tool, handleAddToCart }) => {
  return (
    <div className="card border p-6 shadow-sm">


         {/* Product Image */}
      {tool.image && (
        <img
          src={tool.image}
          alt={tool.name}
          className="w-16 h-16 object-cover rounded-full"
        />
      )}
      <p className="badge badge-warning absolute top-0 right-4">{tool.tagType}</p>
      

      <h2 className="text-2xl font-bold">{tool.name}</h2>
      <p className="text-gray-500 my-3">{tool.description}</p>

      <h3 className="text-xl font-semibold">
        ${tool.price}/{tool.period}
      </h3>


      {/* Features List with Checkmark  */}

      <ul className="my-4 space-y-1">
        {tool.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <IoMdCheckmark className="text-green-500" /> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(tool)}
        className="btn bg-purple-600 text-white rounded-full"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;