import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

function CartPage() {
  const {
    carts,
    currentCart,
    setCurrentCart,
    removeFromCart,
    updateQuantity,
    createCart,
  } = useCart();
  const [newCartName, setNewCartName] = useState("");

  const handleCreateCart = (e) => {
    e.preventDefault();
    if (newCartName.trim() && !carts[newCartName]) {
      createCart(newCartName);
      setCurrentCart(newCartName);
      setNewCartName("");
    }
  };

  const getTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const currentCartItems = carts[currentCart] || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Shopping Cart
      </h1>

      {/* Cart Management */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {Object.keys(carts).map((cartName) => (
              <button
                key={cartName}
                onClick={() => setCurrentCart(cartName)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentCart === cartName
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {cartName} ({carts[cartName].length})
              </button>
            ))}
          </div>

          <form onSubmit={handleCreateCart} className="flex gap-2">
            <input
              type="text"
              placeholder="New cart name..."
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={newCartName}
              onChange={(e) => setNewCartName(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Create
            </button>
          </form>
        </div>
      </div>

      {/* Cart Items */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
        {currentCartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              Your {currentCart} cart is empty
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              Add some products to get started!
            </p>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {currentCart} Cart ({currentCartItems.length} items)
              </h2>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {currentCartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 flex flex-col md:flex-row gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {item.description}
                    </p>
                    <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1,
                            currentCart
                          )
                        }
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-semibold text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1,
                            currentCart
                          )
                        }
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, currentCart)}
                      className="text-red-600 hover:text-red-700 p-2 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Total: Rs. {getTotalPrice(currentCartItems).toLocaleString()}
                </span>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
