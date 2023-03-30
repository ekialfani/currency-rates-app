function CurrencyRatesTable(props) {
  const { currencies, exchangeRate, buyingPrice, sellingPrice } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchage Rate</th>
          <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
      {currencies.map((currency, index) => (
        <tr key={index}>
          <td>{currency}</td>
          <td>{buyingPrice[index][currency]}</td>
          <td>{exchangeRate[index][currency]}</td>
          <td>{sellingPrice[index][currency]}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default CurrencyRatesTable;