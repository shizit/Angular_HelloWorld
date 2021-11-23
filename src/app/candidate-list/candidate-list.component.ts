import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.candidates = [
      {
        candidate_id: 0,
        candidate_title: '沖縄',
        point: '海がきれい',
        cost: '30000～50000円',
      },
      {
        candidate_id: 0,
        candidate_title: '沖縄',
        point: '海がきれい',
        cost: '30000～50000円',
      },
      {
        candidate_id: 0,
        candidate_title: '沖縄',
        point: '海がきれい',
        cost: '30000～50000円',
      },
      {
        candidate_id: 0,
        candidate_title: '沖縄',
        point: '海がきれい',
        cost: '30000～50000円',
      },
      {
        candidate_id: 0,
        candidate_title: '沖縄',
        point: '海がきれい',
        cost: '30000～50000円',
      },
      {
        candidate_id: 0,
        candidate_title: '沖縄',
        point: '海がきれい',
        cost: '30000～50000円',
      },
    ];
  }

  toCandidateDetail(){
    this.router.navigateByUrl('/candidate-detail');
  }
}
