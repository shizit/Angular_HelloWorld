import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../../travel';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  apiUrl = "api/travels";

  constructor(private httpclient: HttpClient){}
  getTravels(): Observable<any> {
    return this.httpclient.get(this.apiUrl);
  }

  postTravels(travel: Travel): Observable<any> {
    return this.httpclient.post(this.apiUrl, travel);
  }

  deleteTravels(travel: Travel): Observable<any> {
    console.log(`${this.apiUrl}/${travel.travel_id}`);
    return this.httpclient.delete(`${this.apiUrl}/${travel.travel_id}`);
  }
}
