import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [currencyInfo, setCurrencyInfo] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
            .then(data => data.json())
            .then(data => setCurrencyInfo(data[currency]))
    }, [currency]);
    return currencyInfo;
}

export default useCurrencyInfo;