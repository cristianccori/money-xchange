export class MoneyXchangeRequest {
    baseAmount: number;
    baseCurrency: string;
    conversionCurrency: string;

    constructor(baseAmount: number, baseCurrency: string, conversionCurrency: string) {
        this.baseAmount = baseAmount;
        this.baseCurrency = baseCurrency;
        this.conversionCurrency = conversionCurrency;
    }
}
