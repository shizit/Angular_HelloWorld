import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Ranking } from '../../interfaces/ranking';

@Component({
  selector: 'app-ranking-personal',
  templateUrl: './ranking-personal.component.html',
  styleUrls: ['./ranking-personal.component.css']
})
export class RankingPersonalComponent implements OnInit {

  rankings: Ranking[] = [
    {rank: 1, candidate_name: 'A.沖縄',point: 1},
    {rank: 2, candidate_name: 'B.北海道',point: 1},
    {rank: 3, candidate_name: 'C.福岡',point: 1}
  ];
  travels = [
    'A.沖縄',
    'B.北海道',
    'C.福岡',
    'D.京都'
  ];

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  drop(event: CdkDragDrop<Ranking[]>) {
    moveItemInArray(this.rankings, event.previousIndex, event.currentIndex);
  }

}
