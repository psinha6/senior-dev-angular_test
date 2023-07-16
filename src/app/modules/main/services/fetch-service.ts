import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {

  constructor(private httpClient: HttpClient) {}

  get status$(): Observable<any> {
    return this.httpClient.get(`fetch`);
  }
}
