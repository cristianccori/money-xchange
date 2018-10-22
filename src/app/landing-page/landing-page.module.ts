import { API_BASE_URL } from '../shared/services/base.service';
import { CacheService } from '../shared/services/cache.service';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LandingPageComponent } from "./landing-page.component";
import { LandingPageRouting } from "./landing-page.routing";
import { MoneyXchangeComponent } from "../money-xchange/money-exchange.component";
import { MoneyXchangeService } from "../money-xchange/money-xchange.service";
import { NgModule } from '@angular/core';
import { WireframeComponent } from "../wireframe/wireframe.component";

@NgModule({
    imports: [
        CommonModule,
        CurrencyMaskModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        LandingPageRouting  
    ],
    declarations: [
        LandingPageComponent,
        MoneyXchangeComponent,
        WireframeComponent
    ],
    providers: [
        CacheService,
        MoneyXchangeService, 
        { provide: API_BASE_URL, useValue: environment.serviceUrl }
    ]
})
export class LandingPageModule { }
