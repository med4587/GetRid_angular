import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Challenge } from 'src/app/challenge';
import { GetRidServiceService } from 'src/app/get-rid-service.service';
@Component({
  selector: 'app-challenge-dashboard',
  templateUrl: './challenge-dashboard.component.html',
  styleUrls: ['./challenge-dashboard.component.css']
})
export class ChallengeDashboardComponent {
    service: GetRidServiceService = new GetRidServiceService();
    listChallenges: Challenge[] = [];
    challenge: Challenge = new Challenge(0, "", [], "Easy", 0, 0, 0);
    
    constructor(){
      
      this.service.getChallenges$().subscribe((challenges : Challenge[])=>{
        this.listChallenges=challenges
      })

    }
    ngOnInit(){
      this.getChallenges();
    }
    getChallenges(){
      this.service.getChallenges$().subscribe((challenges : Challenge[])=>{
        this.listChallenges=challenges
      })
    }
    deleteChallenge(id:number){
      const a=this.listChallenges.filter((ch) => ch.id != id);
      this.service.setChallenges(a);
    }

    editChallenge(t: NgForm, id: number): void {
      const updatedChallenge = { ...this.challenge, id }; // Create a new challenge object with updated values
      const updatedList = this.listChallenges.map(ch => 
        ch.id === id ? updatedChallenge : ch
      );
      console.log(updatedList)
      this.service.setChallenges(updatedList);
      this.getChallenges()
    }

    openEditModal(challenge: Challenge) {
      this.challenge = challenge;
      const editModal = document.getElementById('editModal');
      if (editModal) {
        editModal.style.display = 'block';
      }
    }
    adddescription(){
      
      this.challenge.description.push({task:"",bonus:"0"});
      console.log(this.challenge);
    }
    initChallenge(){
      this.challenge=new Challenge(0, "", [], "Easy", 0, 0, 0);
    }
    addchallenge(){
      
      this.listChallenges.push(this.challenge);
      this.service.setChallenges(this.listChallenges)
    }
  }
