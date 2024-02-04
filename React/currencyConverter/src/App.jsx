import { useState } from 'react'

import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const BackgroundImage="https://www.compareremit.com/uploads/AdobeStock_98127764.jpeg";
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("usd");
    const [toCurrency, setToCurrency] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const fromCurrencyInfo = useCurrencyInfo(fromCurrency);
    const options = Object.keys(fromCurrencyInfo);

    const swapCurrency = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const convert = () => {setConvertedAmount(amount * fromCurrencyInfo[toCurrency])};

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
                
            }}>

            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"  
                                amount={amount}
                                onAmountChange={setAmount}
                                onCurrencyChange={(currency)=>setFromCurrency(currency)}
                                currencyOptions={options}
                                selectedCurrency={fromCurrency}
                                  
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
                                amount={convertedAmount}
                                onAmountChange={setAmount}
                                onCurrencyChange={(currency)=>setToCurrency(currency)}
                                currencyOptions={options}
                                selectedCurrency={toCurrency}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency} to {toCurrency}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default App
