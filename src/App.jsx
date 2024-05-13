import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [resultAmount, setResultAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const currencyOptions = Object.keys(currencyInfo);

  const swapCurrency = () => {
    // Swap currencies
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);

    // Swap amounts if needed
    setAmount(resultAmount);
    setResultAmount(amount);
  };

  const convertFinalAmount = () => {
    setResultAmount(amount * currencyInfo[toCurrency]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-900">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertFinalAmount();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                selectCurrency={fromCurrency}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapCurrency}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={resultAmount}
                currencyOptions={currencyOptions}
                selectCurrency={toCurrency}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
