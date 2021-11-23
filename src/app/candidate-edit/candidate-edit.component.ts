import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styleUrls: ['./candidate-edit.component.css']
})
export class CandidateEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCandidateDetail() {
    this.router.navigateByUrl('/candidate-detail');
  }

}
