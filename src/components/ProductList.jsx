import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Caramel Macchiato",
      price: "$4.95",
      features: ["Espresso", "Steamed Milk", "Vanilla Syrup", "Caramel Drizzle"],
    },
    {
      id: 2,
      name: "Iced Americano",
      price: "$3.25",
      features: ["Espresso", "Cold Water", "Served Over Ice"],
    },
    {
      id: 3,
      name: "Pumpkin Spice Latte",
      price: "$5.45",
      features: ["Espresso", "Pumpkin Spice Sauce", "Steamed Milk", "Whipped Cream"],
    },
    {
      id: 4,
      name: "Mocha Frappuccino",
      price: "$4.95",
      features: ["Coffee", "Milk", "Mocha Sauce", "Blended Ice", "Whipped Cream"],
    },
    {
      id: 5,
      name: "Strawberry Açaí Refresher",
      price: "$4.75",
      features: ["Strawberry Açaí", "Green Coffee Extract", "Lemonade", "Ice"],
    },
    {
      id: 6,
      name: "Hot Chocolate",
      price: "$3.95",
      features: ["Steamed Milk", "Mocha Sauce", "Whipped Cream", "Vanilla Syrup"],
    },
  ];

  const handleOrder = (productName) => {
    alert(`Order placed for ${productName}!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-800">☕ Starbucks Menu</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-2">{product.name}</h3>
            <p className="text-green-600 text-lg font-bold mb-4">{product.price}</p>
            <ul className="text-gray-700 space-y-1 list-disc list-inside mb-6 flex-grow">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="flex justify-center">
              <button
                onClick={() => handleOrder(product.name)}
                className="w-32 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
