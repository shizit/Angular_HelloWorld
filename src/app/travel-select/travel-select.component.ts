import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import { TravelsService } from '../services/travels.service';

@Component({
  selector: 'app-travel-select',
  templateUrl: './travel-select.component.html',
  styleUrls: ['./travel-select.component.css']
})
export class TravelSelectComponent implements OnInit {

  getTravels: Travel[] = [];
  postTravel: Travel = {
    travel_id: 0,
    travel_name: 'default',
    travel_date: 'default'
  };
  constructor(private dataService: TravelsService) { }

  ngOnInit(): void {
    this.dataService.getTravels()
    .subscribe
    (
      response => {
        this.getTravels = response;
      } 
    )
  } 

  onRegister(): void {
    this.postTravel = {
      travel_id: 0,
      travel_name: this.postTravel.travel_name,
      travel_date: this.postTravel.travel_date
    };

    this.dataService.postTravels(this.postTravel)
      .subscribe
      (
        response => {
          this.getTravels = response;
        }
      )
  }

  onDelete(deleteTravel: Travel): void {
    console.log("onDelete実行");
    console.log(deleteTravel);
    this.dataService.deleteTravels(deleteTravel)
    .subscribe(
      response => {
        this.getTravels = response;
      }
    )
  }

}
