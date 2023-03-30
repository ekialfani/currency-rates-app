/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles/App.css';
import Header from './components/header';
import CurrencyRates from './components/currency.rates';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <CurrencyRates />
      <Footer />
    </>
  );
}

export default App;
