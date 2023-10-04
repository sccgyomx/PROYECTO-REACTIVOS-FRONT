import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Reactivo } from '../application/models/reactivo.interface';

@Injectable({
  providedIn: 'root'
})
export class ReactivoService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<Reactivo[]> {
    return this.http.get<Reactivo[]>(url)
  }

  post(url: string, body: any): Observable<Reactivo> {
    return this.http.post<Reactivo>(url, body)
  }
}
