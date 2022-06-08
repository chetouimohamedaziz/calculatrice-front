import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }

  addition(a: number, b: number) {
    return this.http.get<number>(`${API_URLS.OPERATIONs_URL}/addition`, { params: { a, b } });
  }

  subtraction(a: number, b: number) {
    return this.http.get<number>(`${API_URLS.OPERATIONs_URL}/subtraction`, { params: { a, b } });
  }

  multiplication(a: number, b: number) {
    return this.http.get<number>(`${API_URLS.OPERATIONs_URL}/multiplication`, { params: { a, b } });
  }

  division(a: number, b: number) {
    return this.http.get<number>(`${API_URLS.OPERATIONs_URL}/division`, { params: { a, b } });
  }
}
