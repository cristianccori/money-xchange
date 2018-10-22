import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export const API_BASE_URL = new InjectionToken('API_BASE_URL');

@Injectable()
export class BaseService {
    
    public http: HttpClient = null;
    public baseUrl: string;
    public jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor( @Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : '';
    }

    get headers() {
        return new HttpHeaders({ 'Accept': 'application/json', 'Accept-Language': 'en-US' });
    }

    handleError(err: HttpErrorResponse) {
        const errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
   
}
