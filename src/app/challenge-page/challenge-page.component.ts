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
  list:boolean[]=[]
  service = new GetRidServiceService();
  
  listChallenges: Challenge[] = [];
  constructor( ) {
    this.service.getChallenges$().subscribe((data: Challenge[]) => {
      this.challenges = data;
      this.listChallenges = this.challenges;
    });
    for(let i = 0 ; i < this.listChallenges.length;i++){
    this.list.push(false);
    }
  }
  ngOnInit() {
    this.service.getChallenges$().subscribe((data: Challenge[]) => {
      this.challenges = data;
      this.listChallenges = this.challenges;
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

  addParticipant(c: Challenge ,i:number ) {
    const updatedList = this.listChallenges.map(ch => 
      ch.id === c.id ? { ...ch, participants: (ch.participants || 0) + 1 } : ch
    );
    console.log(updatedList);
    this.service.setChallenges(updatedList);
    this.list[i]=true;
    
  }
  disableButton(button : HTMLButtonElement) {
    button.disabled = true; // Disable the clicked button
}
}