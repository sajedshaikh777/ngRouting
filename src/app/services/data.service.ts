import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        // HTTP GET method
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(resource) {
        // HTTP POST method
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource) {
        // Use PATCH method when to update the selected part of request payload
        // return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        // .map(response => response.json())
        // .catch(this.handleError);

        // Use PUT method when to update the entire part of request payload
        return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id) {
        // HTTP DELETE method
        return this.http.delete(this.url + '/' + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
        }
        return Observable.throw(new AppError(error));
    }

}
