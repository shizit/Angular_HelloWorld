import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import { TravelsService } from '../services/travels/travels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-select',
  templateUrl: './travel-select.component.html',
  styleUrls: ['./travel-select.component.css'],
})
export class TravelSelectComponent implements OnInit {
  travels: Travel[] = [];
  inputTravels: Travel = {
    travel_id: 0,
    travel_name: 'default',
    travel_date: 'default',
  };
  constructor(private dataService: TravelsService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getTravels().subscribe((response) => {
      this.travels = response;
    });
  }

  onRegister(): void {
    this.dataService.postTravels(this.inputTravels).subscribe((response) => {
      this.travels = response;
    });
  }
  toTravelRegister() {
    this.router.navigateByUrl('/travel-register');
  }
  onDelete(deleteTravel: Travel): void {
    console.log('onDelete実行');
    console.log(deleteTravel);
    this.dataService.deleteTravels(deleteTravel).subscribe((response) => {
      this.travels = response;
    });
  }
}
