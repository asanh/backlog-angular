import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import axios, { AxiosInstance } from 'axios';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private axiosClient: AxiosInstance;
  private config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  private apiUrl = environment.backendURL;

  constructor() {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString(),
      },
    });
  }

  public async post(
    route: string,
    data: any,
    params: RequestParams = {}
  ): Promise<{ token: string }> {
    if (!route.startsWith('/')) {
      route = `/${route}`;
    }

    if (!params.headers) {
      params.headers = {};
    }

    if (!params.noToken) {
      params.headers['X-AUTH-TOKEN'] =
        localStorage.getItem('authToken') ?? null;
    }

    const result = await this.axiosClient.post(
      `${this.apiUrl}${route}`,
      data,
      params
    );
    return result.data;
  }
}

export interface RequestParams {
  headers?: { [header: string]: string | null };
  noToken?: boolean;
  params?: Params;
}
