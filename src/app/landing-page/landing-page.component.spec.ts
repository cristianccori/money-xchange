import { API_BASE_URL } from '../shared/services/base.service';
import { CacheService } from '../shared/services/cache.service';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page.component';
import { MoneyXchangeComponent } from "../money-xchange/money-exchange.component";
import { MoneyXchangeRequest } from '../money-xchange/dto/money-xchange-request';
import { MoneyXchangeService } from "../money-xchange/money-xchange.service";
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { WireframeComponent } from "../wireframe/wireframe.component";

let app: LandingPageComponent;
let fixture: ComponentFixture<LandingPageComponent>;

describe('LandingPageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CurrencyMaskModule,
        FormsModule,
        HttpClientModule
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
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(LandingPageComponent);
      app = fixture.componentInstance;
    });
  }));

  it('App was created successfully!', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`Base Currency Code is 'EUR'`, async(() => {
    expect(app.baseCurrencyCode).toEqual('EUR');
  }));

  it(`Conversion Currency Code is 'USD'`, async(() => {
    expect(app.conversionCurrencyCode).toEqual('USD');
  }));

  it('Money exchange was recovered successfully!', async(() => {
    const request = new MoneyXchangeRequest(20, 'EUR', 'USD');
    app.moneyXchangeService.getLatest(request).toPromise().then( (result) => {         
      expect(result.success).toBeTruthy();
      expect(result.rate).toBeGreaterThan(0);
    });    
  }));
});
