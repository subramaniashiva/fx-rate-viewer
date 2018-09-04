// API key for the application.
// Read from the environment file.
const API_KEY: string = process.env.REACT_APP_API_KEY || '';

const API = {
  root: 'https://openexchangerates.org/api',
  path: {
    loadRates: `/latest.json?app_id=${API_KEY}`,
  },
};
export default API;
