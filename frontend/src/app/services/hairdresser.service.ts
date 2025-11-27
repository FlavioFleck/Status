import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HairdresserService {
    private API_URL = 'http://localhost:5010/hairdresser';
    
    constructor(private http: HttpClient) {

    }

    create(data: any) {
        return this.http.post(`${this.API_URL}/create`, data);
    }

    delete(data: any) {
        return this.http.delete(`${this.API_URL}/delete/${data}`);
    }

    getAll() {
        return this.http.get(`${this.API_URL}/getAll`);
    }
  

}
