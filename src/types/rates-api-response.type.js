export type RatesAPIResponse = {
  success: boolean,
  base: string,
  rates: {
    GBP: number,
    EUR: number,
  },
} | {};
