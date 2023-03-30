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
        <p>Rates are based from 1 USD.</p>
        <p>This application uses <a href="https://currencyfreaks.com/" target="_blink" rel="noreferrer">CurrencyFreaks</a> API.</p>
        <p className="copyright">
          Developed by
          <i className="fa fa-heart" aria-hidden="true"></i>
          <a href="#">ekialfani.</a>
        </p>
      </main>
    );
  }

  return <p>Data not found...</p>
}

export default CurrencyRates;
