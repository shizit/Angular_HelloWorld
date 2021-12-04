import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCandidateList() {
    this.router.navigateByUrl('/candidate-list');
  }
  toCandidateEdit() {
    this.router.navigateByUrl('/candidate-edit');
  }

}
