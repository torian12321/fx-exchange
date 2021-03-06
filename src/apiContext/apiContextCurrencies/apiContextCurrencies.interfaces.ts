export enum CurrencyCodes {
  EUR = 'EUR',
  GBP = 'GBP',
  USD = 'USD',
}

export interface ICurrency {
  id: CurrencyCodes,
  name: string,
  shortName: string;
  symbol: string,
  rate?: string | number,
}
