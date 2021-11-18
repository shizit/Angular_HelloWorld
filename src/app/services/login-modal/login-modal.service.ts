import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {
  private closeEventSubject = new Subject<string>();

  public closeEventObservable$ = this.closeEventSubject.asObservable();
  constructor() { }

  public requestCloseModal() {
    this.closeEventSubject.next();
  }
}
