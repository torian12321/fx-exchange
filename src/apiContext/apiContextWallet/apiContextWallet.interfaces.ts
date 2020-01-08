export enum CurrencyCodes {
  EUR = 'EUR',
  GBP = 'GBP',
  USD = 'USD',
}

export interface ICurrency {
  id: CurrencyCodes,
  value: number,
  name: string,
  shortName: string;
  symbol: string,
}
