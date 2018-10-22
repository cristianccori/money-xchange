import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from '../shared/services/base.service'
import { Constants } from '../shared/common/constants';
import { Injectable } from '@angular/core';
import { MoneyXchangeRequest } from './dto/money-xchange-request';
import { MoneyXchangeResponse } from './dto/money-xchange-response';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoneyXchangeService extends BaseService {

    getLatest(request: MoneyXchangeRequest): Observable<MoneyXchangeResponse>{
        const url = `${this.baseUrl}${Constants.MONEY_XCHANGE_SERVICE.Method.Latest}?access_key=${Constants.MONEY_XCHANGE_SERVICE.AccessKey}&base=${request.baseCurrency}&symbols=${request.conversionCurrency}`;
        return this.http.get(url, { headers: this.headers })
            .map(response => new MoneyXchangeResponse(request.conversionCurrency, response))
            .catch(this.handleError);
    }
}