import { AfterViewInit, OnInit, ViewChild, Component, Output, Input, EventEmitter } from "@angular/core";
import { Constants } from '../shared/common/constants';
import { MoneyXchangeRequest } from './dto/money-xchange-request';

@Component({
    selector: "money-exchange-app",
    templateUrl: "./money-exchange.component.html"
})

export class MoneyXchangeComponent implements OnInit, AfterViewInit {
    @ViewChild('focus') baseAmountInput;
    @Input() baseCurrencyCode: string;
    @Input() baseCurrencySymbol: string;
    @Input() conversionCurrencyCode: string;
    @Input() conversionCurrencySymbol: string;
    @Input() conversionAmount: number;
    @Output('calculate') calculateEmitter = new EventEmitter<MoneyXchangeRequest>();

    buttonText: string;
    baseAmount: number = 0;
    baseMaskOptions: any = {};
    conversionMaskOptions: any = {};
    onFocus: boolean = true;
    
    ngOnInit() {
        this.buttonText = Constants.MONEY_XCHANGE_TEXT.Button;
        this.baseMaskOptions = { 
            prefix: `${this.baseCurrencySymbol} `, 
            thousands: Constants.CURRENCY_MASK_OPTIONS.ThousandsSeparator,
            decimal: Constants.CURRENCY_MASK_OPTIONS.DecimalSeparator, 
            precision: Constants.CURRENCY_MASK_OPTIONS.DecimalPrecision, 
            allowNegative: Constants.CURRENCY_MASK_OPTIONS.AllowNegative 
        };
        this.conversionMaskOptions = { 
            prefix: `${this.conversionCurrencySymbol} `,
            thousands: Constants.CURRENCY_MASK_OPTIONS.ThousandsSeparator,
            decimal: Constants.CURRENCY_MASK_OPTIONS.DecimalSeparator, 
            precision: Constants.CURRENCY_MASK_OPTIONS.DecimalPrecision, 
            allowNegative: Constants.CURRENCY_MASK_OPTIONS.AllowNegative 
        };
    }

    ngAfterViewInit() {
        this.baseAmountInput.nativeElement.focus();       
    }

    public disable() {
        this.focus();
        return this.baseAmount == null || this.baseAmount == 0;
    }

    public reset() {
        this.conversionAmount = null;
    }

    public calculate() {
        if (this.baseAmount <= 0) return;
        const request = new MoneyXchangeRequest(this.baseAmount, this.baseCurrencyCode, this.conversionCurrencyCode);
        this.calculateEmitter.next(request);
    }

    private focus() {
        if (this.onFocus && this.baseAmountInput.nativeElement.selectionStart){
            this.baseAmountInput.nativeElement.setSelectionRange(3, 3);
            this.onFocus = false;
        }
    }
}