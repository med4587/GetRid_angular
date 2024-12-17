// challenges.component.ts
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../challenge';
import { GetRidServiceService } from '../get-rid-service.service';



@Component({
  selector: 'app-challenges',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.css']
})
export class ChallengePageComponent implements OnInit {
  challenges: Challenge[] = [];
  selectedDifficulty: string = 'all';
  difficulties: string[] = ['All', 'Easy', 'Medium', 'Hard'];

  service = new GetRidServiceService();
  
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

  filterByDifficulty(difficulty: string) {
    this.selectedDifficulty = difficulty.toLowerCase();
  }

  get filteredChallenges() {
    return this.selectedDifficulty === 'all'
      ? this.challenges
      : this.challenges.filter(c => c.difficulty.toLowerCase() === this.selectedDifficulty);
  }
}