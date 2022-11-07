import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private apiUrl = environment.backendURL;

  constructor(private httpClient: HttpClient) {}

  public async post(route: string, data: any) {
    if (!route.startsWith('/')) {
      route = `/${route}`;
    }

    this.httpClient
      .post(`${this.apiUrl}${route}`, data, this.httpOptions)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
