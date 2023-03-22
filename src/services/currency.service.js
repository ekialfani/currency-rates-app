import API_ENDPOINTS from "../api/api.endpoints";

function CurrencyServices() {
  return fetch(API_ENDPOINTS.CURRENCIES)
    .then(response => response.json())
    .then(result => result.rates);
}

export default CurrencyServices;