// materials.component.ts
import { Component, OnInit } from '@angular/core';
import { GetRidServiceService } from '../get-rid-service.service';
import { Material } from '../material';



@Component({
  selector: 'app-materials',
  templateUrl: './material-page.component.html',
  styleUrls: ['./material-page.component.css']
})
export class MaterialPageComponent implements OnInit {
  materials: Material[] = [];
  selectedCategory: string = 'all';
  categories: string[] = ['All', 'Plastic', 'Paper', 'Glass', 'Metal', 'Electronics'];
  service = new GetRidServiceService();
  material: Material[] = [];
  
  constructor() {
    this.service.getMaterials$().subscribe((data: Material[]) => {
      this.material= data;
      this.materials =this.material.slice(0,3);
    });
  }

  ngOnInit(): void {}

  filterByCategory(category: string) {
    this.selectedCategory = category.toLowerCase();
  }

  get filteredMaterials() {
    return this.selectedCategory === 'all' 
      ? this.materials 
      : this.materials.filter(m => m.name.toLowerCase() === this.selectedCategory);
  }
}