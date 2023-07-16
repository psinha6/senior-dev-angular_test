import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { repeat } from 'rxjs/internal/operators/repeat';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { environment } from 'src/environments/environment';
import { StatusModel } from '../models/status-model';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  apiEndPoint = 'http://localhost:' + environment.apiEndPoint;

  constructor(private httpClient: HttpClient) {}

  get status$(): Observable<number> {
    return this.httpClient.get<StatusModel>(`${this.apiEndPoint}/fetch`).pipe(
      repeat({ delay: 2000 }),
      map((apiResp) => apiResp.processed),
      takeWhile((resp: number) => {
        return resp !== 100;
      }, true),
    );
  }
}
