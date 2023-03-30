import useCurrencies from '../utils/currencies.hooks';
import CurrencyRatesTable from './currency.rates.table';

function isDataCurrencyExist(currencies, exchangeRate, buyingPrice, sellingPrice) {
  return Boolean(
    currencies.length &&
    exchangeRate.length &&
    buyingPrice.length &&
    sellingPrice.length
  );
}

function CurrencyRates() {
  const [currencies, exchangeRate, buyingPrice, sellingPrice] = useCurrencies();

  if (isDataCurrencyExist(currencies, exchangeRate, buyingPrice, sellingPrice)) {
    return (
      <main>
        <CurrencyRatesTable
          currencies={currencies}
          exchangeRate={exchangeRate}
          buyingPrice={buyingPrice}
          sellingPrice={sellingPrice}
        />
      </main>
    );
  }

  return <p>Data not found...</p>
}

export default CurrencyRates;
