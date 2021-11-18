import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { LoginModalService } from '../services/login-modal/login-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  public modal: any = null;


  constructor(private modalService: LoginModalService) {}

  ngOnInit(): void {
    this.subscription = this.modalService.closeEventObservable$.subscribe(
      ()=> {
        this.modal = null;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onClick($event: any) {
    this.setModal();
  }

  private setModal() {
    this.modal = LoginModalComponent;
  }
}

