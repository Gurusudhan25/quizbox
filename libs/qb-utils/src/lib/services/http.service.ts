/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { ApiData } from '../interfaces/ApiData';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<ApiData> {
    return this.http.get<ApiData>(url).pipe(map(res => res.data));
  }

  patch(url: string, data: any): Observable<ApiData> {
    return this.http.patch<ApiData>(url, data).pipe(map(res => res.data));
  }

  delete(url: string): Observable<ApiData> {
    return this.http.delete<ApiData>(url).pipe(map(res => res.data));
  }

  post(url: string, data: any): Observable<ApiData> {
    return this.http.post<ApiData>(url, data).pipe(map(res => res.data));
  }
}
