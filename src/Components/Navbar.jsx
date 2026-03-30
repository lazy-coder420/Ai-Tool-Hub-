import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-8 lg:px-16">
      <div className="navbar-start">
        <a className="text-4xl font-bold text-purple-600">DigiTools</a>
      </div>

      <div className="navbar-end gap-5 flex items-center">
        <button className="btn btn-ghost btn-circle relative">
          <FaShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        <a className="font-medium cursor-pointer">Login</a>

        <button className="btn bg-purple-600 text-white rounded-full px-6 border-none hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;