import { Injectable } from '@angular/core';
import { Mission } from '../models/mission';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  api = 'https://api.spacexdata.com/v3/launches';
  constructor(private httpClient: HttpClient) { }
  getMissionList(): Observable<Mission[]>{
    return this.httpClient.get<Mission[]>(this.api);
  }

  getMission(id:number): Observable<Mission>{
    return this.httpClient.get<Mission>(`${this.api}/${id}`);
  }
}
