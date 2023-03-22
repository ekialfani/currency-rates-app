/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/App.css';
import useCurrencies from './utils/currencies.hooks';
import CurrencyRatesTable from './components/currency.rates.table';

function isDataCurrencyExist(currencies, exchangeRate, buyingPrice, sellingPrice) {
  return Boolean(
    currencies.length &&
    exchangeRate.length &&
    buyingPrice.length &&
    sellingPrice.length
  );
}

function App() {
  const [currencies, exchangeRate, buyingPrice, sellingPrice] = useCurrencies();

  if (isDataCurrencyExist(currencies, exchangeRate, buyingPrice, sellingPrice)) {
    return (
      <div>
        <h1>Currency Rates App</h1>
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
          <i class="fa fa-heart" aria-hidden="true"></i>
          <a href="#">ekialfani.</a>
        </p>
      </div>
    );
  }

  return <p>Data not found...</p>
}

export default App;