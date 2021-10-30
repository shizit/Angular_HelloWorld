import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  apiUrl = "api/travels";

  constructor(private httpclient: HttpClient){}
  getTravels(): Observable<any> {
    return this.httpclient.get(this.apiUrl);
  }
}
