import CONFIG from "../config/config";

const { BASE_URL, CURRENCY_SYMBOL, API_KEY } = CONFIG;

const API_ENDPOINTS = {
  CURRENCIES: `${BASE_URL}apikey=${API_KEY}&symbols=${CURRENCY_SYMBOL.join(',')}`
}

export default API_ENDPOINTS;