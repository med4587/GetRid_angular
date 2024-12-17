import { Component } from '@angular/core';
import { Material } from '../material';
import { GetRidServiceService } from '../get-rid-service.service';

@Component({
  selector: 'app-list-materials',
  templateUrl: './list-materials.component.html',
  styleUrls: ['./list-materials.component.css']
})
export class ListMaterialsComponent {
    
  service = new GetRidServiceService();
  material: Material[] = [];
  listMaterials: Material[] = [];
  constructor() {
    this.service.getMaterials$().subscribe((data: Material[]) => {
      this.material= data;
      this.listMaterials =this.material.slice(0,3);
    });
  }
    
    
    
}
