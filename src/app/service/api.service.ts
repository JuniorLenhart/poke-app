import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Service } from './service';

@Injectable()
export class ApiService extends Service {

    constructor(private http: Http) {
        super();
    }

    findAll(param: object): Promise<any> {
        return this.http.get(this.apiUrl + 'pokemon' + this.getParams(param), { headers: this.getHeaders() }).toPromise().then(this.extractData).catch(this.handleErrorPromise);
    }

}