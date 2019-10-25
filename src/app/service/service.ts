import { Response, Headers } from '@angular/http';

import { environment } from './../../environments/environment';

export abstract class Service {

    apiUrl: string = environment.apiUrl;

    getHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        return headers;
    }

    getParams(params: object): string {
        return this.extractParams('', params);
    }

    extractData(response: Response) {
        return response.text() ? Service.isJSON(response.text()) ? JSON.parse(response.text(), Service.JSONparser) : response.text() : null;
    }

    handleErrorPromise(error: Response | any) {
        return Promise.reject(error.message || error);
    }

    private extractParams(paramsUrl: string, params: object) {
        Object.keys(params).forEach(key => {
            paramsUrl += paramsUrl ? '&' : '?';
            paramsUrl += params[key] ? key + '=' + encodeURIComponent(params[key]) : '';
        });

        return paramsUrl;
    }

    private static JSONparser(key, value) {
        const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;

        if (typeof value === 'string' && dateFormat.test(value)) {
            return new Date(value);
        }

        return value;
    }

    private static isJSON(value) {
        try {
            JSON.parse(value);
        } catch (e) {
            return false;
        }

        return true;
    }

}