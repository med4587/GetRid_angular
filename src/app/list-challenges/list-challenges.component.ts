

import { Component, OnInit } from '@angular/core';
import { Challenge } from '../challenge';
import { GetRidServiceService } from '../get-rid-service.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-list-challenges',
  templateUrl: './list-challenges.component.html',
  styleUrls: ['./list-challenges.component.css']
})
export class ListChallengesComponent {
  service = new GetRidServiceService();
  challenges: Challenge[] = [];
  listChallenges: Challenge[] = [];
  constructor( ) {
    this.service.getChallenges$().subscribe((data: Challenge[]) => {
      this.challenges = data;
      this.listChallenges = this.challenges.slice(0, 3);
    });
  }
  ngOnInit() {
    this.service.getChallenges$().subscribe((data: Challenge[]) => {
      this.challenges = data;
      this.listChallenges = this.challenges.slice(0, 3);
    });
  }
  //challenge = this.service.getChallenges$();
  seeChallenges(){
      
  }
  
}
