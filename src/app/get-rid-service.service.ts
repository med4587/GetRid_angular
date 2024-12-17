import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Challenge } from './challenge';
import { Material } from './material';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class GetRidServiceService {
  // Using BehaviorSubject to hold the state
  private challengesSubject = new BehaviorSubject<Challenge[]>([]);
  private materialsSubject = new BehaviorSubject<Material[]>([]);
  private firstCarouselSubject = new BehaviorSubject<string[]>([]);
  private secondCarouselSubject = new BehaviorSubject<string[]>([]);
  private loginSubject = new BehaviorSubject<Login[]>([]);

  

  constructor() {

    this.insertStaticData();

  }
  plastic = new Material(
    4,
    'https://example.com/plastic.jpg',
    'Plastic',
    [
      'A versatile material used in packaging, containers, and countless everyday products.',
      'Non-biodegradable, making proper recycling essential to reduce pollution.',
      'Can be recycled into new products like plastic furniture, construction materials, and textiles.'
    ]
  );
 copper = new Material(
  1,
    'https://example.com/copper.jpg',
    'Copper (Cuivre)',
    [
      'A durable and highly conductive metal used in electrical wiring, electronics, and plumbing.',
      '100% recyclable without any loss of quality, making it a sustainable resource.',
      'Highly valuable in the recycling market due to its widespread industrial use.'
    ]
  );
  
   cardboard = new Material(
    2,
    'https://example.com/cardboard.jpg',
    'Cardboard (Carton)',
    [
      'Commonly used for packaging, shipping boxes, and product storage.',
      'Easily recyclable and can be repurposed into new cardboard, paper, or insulation materials.',
      'Requires proper handling (e.g., flattening and removing contaminants) for effective recycling.'
    ]
  );

   glass = new Material(
    3,
    'https://example.com/glass.jpg',
    'Glass',
    [
      'Used in bottles, jars, windows, and other applications.',
      'Recyclable endlessly without losing quality or purity.',
      'Requires proper sorting to ensure effective recycling processes.'
    ]
  );
  copperPlasticChallenge = new Challenge(
    1,
    'Recycling Collection Challenge',
    [
      { task: 'Collect 50 plastic bottles for recycling', bonus: '15' }, // Changed bonus to string
      { task: 'Collect 10 kg of copper for recycling', bonus: '20' } // Changed bonus to string
    ],
    'Easy', // Added difficulty
    10, // Added points
    7, // Added time limit
    30 // Added participants
  );
   glassAluminumChallenge = new Challenge(
    2,
    'Glass & Aluminum Collection Challenge',
    [
      { task: 'Collect 30 glass bottles or jars for recycling', bonus: '' },
      { task: 'Collect 5 kg of aluminum cans for recycling', bonus: '' }
    ],
    'Medium', // Added difficulty
    12, // Added points
    5, // Added time limit
    50 // Added participants
  );
   paperCardboardChallenge = new Challenge(
    3,
    'Paper & Cardboard Collection Challenge',
    [
      { task: 'Collect 10 kg of paper for recycling', bonus: '10' }, // Changed bonus to string
      { task: 'Collect 20 flattened cardboard boxes for recycling', bonus: '15' } // Changed bonus to string
    ],
    'Easy', // Added difficulty
    10, // Added points
    7, // Added time limit
    30 // Added participants
  );
  Salah=new Login("saleh@gmail.com","saleh123","user");
  Nouri=new Login("nouri@gmail.com","nouri987","admin");
  private insertStaticData(){
    this.materialsSubject.next([this.plastic,this.glass,this.cardboard,this.copper]) ;
    this.challengesSubject.next([this.glassAluminumChallenge,this.copperPlasticChallenge,this.paperCardboardChallenge]);
    this.firstCarouselSubject.next(['1','2','3','4']);
    this.secondCarouselSubject.next(['3R','recycleToDay','recyclingRight']);
    this.loginSubject.next([this.Salah,this.Nouri]);
  }
  // Observable for challenges
  getChallenges$() {
    return this.challengesSubject.asObservable();
  }
  

  getLogin$() {
    return this.loginSubject.asObservable();
  }

  setChallenges(challenges: Challenge[]): void {
    this.challengesSubject.next(challenges);
  }

  // Observable for materials
  getMaterials$() {
    return this.materialsSubject.asObservable();
  }

  setMaterials(materials: Material[]): void {
    this.materialsSubject.next(materials);
  }

  // Observable for firstCarousel
  getFirstCarousel$() {
    return this.firstCarouselSubject.asObservable();
  }

  setFirstCarousel(firstCarousel: string[]): void {
    this.firstCarouselSubject.next(firstCarousel);
  }

  // Observable for secondCarousel
  getSecondCarousel$() {
    return this.secondCarouselSubject.asObservable();
  }

  setSecondCarousel(secondCarousel: string[]): void {
    this.secondCarouselSubject.next(secondCarousel);
  }
}