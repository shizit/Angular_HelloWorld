import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../services/login-modal/login-modal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private modalService: LoginModalService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log('destroyed');
  }
  public onClick($event: any) {
    this.notifyCloseModal();
  }
  private notifyCloseModal() {
    this.modalService.requestCloseModal();
  }

  toTravelSelect() {
    this.router.navigateByUrl('/travel-select');
  }

}
