import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-green-50 rounded-xl shadow-md text-center">
      <img
        src="https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=80&dpr=2"
        alt="Starbucks Logo"
        className="mx-auto mb-4 w-16 h-16"
      />
      <h2 className="text-3xl font-bold mb-4 text-green-800">Coffee Counter</h2>
      <p className="text-gray-700 mb-6">Keep track of your favorite coffee shots ☕</p>

      <p className="text-6xl font-bold text-green-900 mb-6">{count}</p>

      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={decrement}
          className="bg-red-400 text-white px-6 py-2 rounded-full text-xl hover:bg-red-500 transition"
        >
          -
        </button>

        <button
          onClick={increment}
          className="bg-green-600 text-white px-6 py-2 rounded-full text-xl hover:bg-green-700 transition"
        >
          +
        </button>
      </div>

      <div className="relative inline-block">
        <button
          onClick={reset}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            count === 0
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-yellow-600 hover:bg-yellow-700 cursor-pointer text-white"
          }`}
          disabled={count === 0}
        >
          Reset
        </button>

        {showTooltip && count !== 0 && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
            Reset coffee counter to zero
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterApp;
