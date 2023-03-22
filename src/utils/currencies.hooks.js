import { useState, useEffect } from "react";
import CurrencyServices from "../services/currency.service";
import CONFIG from "../config/config";

function calculateSellingPrice(currencyRate) {
  return currencyRate - ((currencyRate * 5) / 100);
}

function getSellingPrice(currencies, rates) {
  const result = currencies.map(currency => {
    const rate = Number(rates[currency]);
    const sellingPrice = calculateSellingPrice(rate);
    
    return {
      [currency]: sellingPrice.toFixed(6)
    }
  });

  return result;
}

function calculateBuyingPrice(currencyRate) {
  return currencyRate + ((currencyRate * 5) / 100);
}

function getBuyingPrice(currencies, rates) {
  const result = currencies.map(currency => {
    const rate = Number(rates[currency]);
    const buyingPrice = calculateBuyingPrice(rate);

    return {
      [currency]: buyingPrice.toFixed(6)
    }
  });

  return result;
}

function getExchangeRate(currencies, rates) {
  const result = currencies.map(currency => (
    {
      [currency]: Number(rates[currency]).toFixed(6)
    }
  ));

  return result;
}

function useCurrencies() {
  const [exchangeRate, setExchangeRate] = useState([]);
  const [buyingPrice, setBuyingPrice] = useState([]);
  const [sellingPrice, setSellingPrice] = useState([]);

  const currencies = CONFIG.CURRENCY_SYMBOL;

  useEffect(() => {
    CurrencyServices()
    .then(rates => {
      setExchangeRate(getExchangeRate(currencies, rates));
      setSellingPrice(getSellingPrice(currencies, rates));
      setBuyingPrice(getBuyingPrice(currencies, rates));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return [
    currencies,
    exchangeRate,
    buyingPrice,
    sellingPrice,
  ];
}

export default useCurrencies;