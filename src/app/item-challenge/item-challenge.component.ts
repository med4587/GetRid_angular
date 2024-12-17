
import { Component, Input } from '@angular/core';
import { Challenge } from '../challenge';


@Component({
  selector: 'app-item-challenge',
  templateUrl: './item-challenge.component.html',
  styleUrls: ['./item-challenge.component.css']
})
export class ItemChallengeComponent {
  @Input() public challenge = new Challenge(0,"", [], "Easy", 0, 0, 0);
  
}
