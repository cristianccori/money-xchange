export class MoneyXchangeResponse {
    success: boolean;
    timestamp: string;
    base: string;
    date: Date;
    rate: number;

    constructor(currency: string, data?: any) {
        if (data == null) 
            return;
        
        this.success = data.success;
        this.timestamp = data.timestamp;
        this.base = data.base;
        this.date = data.date ? new Date(data.date) : null;
        this.rate = data.rates[currency] !== undefined ?  data.rates[currency] : 0;
    }
}
