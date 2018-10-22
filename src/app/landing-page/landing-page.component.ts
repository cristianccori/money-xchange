import { CacheService } from '../shared/services/cache.service';
import { Component } from "@angular/core";
import { Constants } from '../shared/common/constants';
import { MoneyXchangeRequest } from '../money-xchange/dto/money-xchange-request';
import { MoneyXchangeResponse } from '../money-xchange/dto/money-xchange-response';
import { MoneyXchangeService } from '../money-xchange/money-xchange.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: "landing-page-app",
    templateUrl: "./landing-page.component.html"
})

 /**
 * TODO: Este es el componente principal el cual maneja los estados. Desde aquí se configura el
 * tipo de cambio de 'EUR' a 'USD' lo cual brinda la facilidad de hacerlo dinámico cuando se requiera.
 */
export class LandingPageComponent {
    baseCurrencyCode: string;
    baseCurrencySymbol: string;
    conversionCurrencyCode: string;
    conversionCurrencySymbol: string;
    conversionAmount: number;
    currencyCacheKey: string;

    constructor(
        private titleService: Title,
        private cacheService: CacheService,
        public moneyXchangeService: MoneyXchangeService,
    ) {
        this.titleService.setTitle(Constants.MONEY_XCHANGE_TEXT.PageTitle);
        this.baseCurrencyCode = Constants.MONEY_XCHANGE_CURRENCY.Code.Europe;
        this.baseCurrencySymbol =  Constants.MONEY_XCHANGE_CURRENCY.Symbol.Europe;
        this.conversionCurrencyCode = Constants.MONEY_XCHANGE_CURRENCY.Code.US;
        this.conversionCurrencySymbol =  Constants.MONEY_XCHANGE_CURRENCY.Symbol.US;
        this.currencyCacheKey = Constants.MONEY_XCHANGE_SERVICE.CacheKey.EuropeToUSCurrency;
    }
    /**
     * Se invoca el servicio de tipo de cambio y se guarda el resultado en caché.
     * Las siguientes peticiones obtendrán el resultado de caché por 10 minutos. 
     */
    public calculateConversion(request: MoneyXchangeRequest) {
        this.cacheService.get(
            this.currencyCacheKey, 
            this.moneyXchangeService.
                getLatest(request))
                .subscribe((response: MoneyXchangeResponse) =>  {
                    this.conversionAmount = response.success ? request.baseAmount * response.rate : 0;
                    return this.conversionAmount;
                });
    }
}