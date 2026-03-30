import React from "react";

const CartSection = ({ cart, handleRemove, handleCheckout }) => {
  if (cart.length === 0) {
    return <h2 className="text-center text-xl">Cart is empty</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="border p-4 flex justify-between items-center"
        >
          <div>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>

          <button
            onClick={() => handleRemove(item.id)}
            className="btn btn-error"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-2xl font-bold">Total: ${total}</h2>

      <button
        onClick={handleCheckout}
        className="btn bg-purple-600 text-white"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSection;