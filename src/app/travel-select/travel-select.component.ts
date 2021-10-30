import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import { TravelsService } from '../services/travels.service';

@Component({
  selector: 'app-travel-select',
  templateUrl: './travel-select.component.html',
  styleUrls: ['./travel-select.component.css']
})
export class TravelSelectComponent implements OnInit {

  travels: Travel[] = [];
  constructor(private dataService: TravelsService) { }

  ngOnInit(): void {
    this.dataService.getTravels()
    .subscribe
    (
      data => {
        this.travels = data;
        console.log(data);
      } 
    )
  } 

}
