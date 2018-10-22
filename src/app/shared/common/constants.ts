export class Constants {
    
    public static get CURRENCY_MASK_OPTIONS(): any {
        return {
            'ThousandsSeparator': ',',
            'DecimalSeparator': '.',
            'DecimalPrecision': 4,
            'AllowNegative': false
        };
    }

    public static get MONEY_XCHANGE_TEXT(): any {
        return {
            'PageTitle': 'Fast MoneyXchange!',
            'Button': 'CALCULATE'
        };
    } 

    public static get MONEY_XCHANGE_SERVICE(): any {
        return {
            'AccessKey': '64ab1fed37b57c3fc1eb58610ae4111b',
            'CacheTime': 600000, //10 min
            'CacheKey': {
                'EuropeToUSCurrency': 'EUR_TO_USD_CURRENCY'
            },
            'Method': {
                'Latest': 'latest',
                'Symbols': 'symbols',
                'Convert': 'convert',
                'TimeSeries': 'timeseries',
                'Fluctuation': 'fluctuation'
            }
        };
    }

    public static get MONEY_XCHANGE_CURRENCY(): any {
        return {
            'Code' : {
                'Europe': 'EUR',
                'US': 'USD'
            },
            'Symbol': {
                'Europe': '€',
                'US': '$'
            }
        };
    }
}