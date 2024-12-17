import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetRidServiceService } from 'src/app/get-rid-service.service';
import { Material } from 'src/app/material';

@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css']
})
export class MaterialDashboardComponent {
  service: GetRidServiceService = new GetRidServiceService();
    listMaterials: Material[] = [];
    material: Material = { id: 0, image: "", name: "",  description: [] };
    
    constructor(){
      
      this.service.getMaterials$().subscribe((materials : Material[])=>{
        this.listMaterials=materials
      })
    }
    ngOnInit(){
      this.getMaterials();
    }
    getMaterials(){
      this.service.getMaterials$().subscribe((materials : Material[])=>{
        this.listMaterials=materials
      })
    }
    deleteMaterial(id:number){
      const a=this.listMaterials.filter((ch) => ch.id != id);
      this.service.setMaterials(a);
    }

    editMaterial(t: NgForm ,id: number):void {
      console.log(this.material)
      this.material={ id: 0, image: "", name: "",  description: [] };
      // const updatedMaterial = { ...t.value, id };
      // const updatedMaterials = this.listMaterials.map(ch => 
      //   ch.id === id ? updatedMaterial : ch
      // );
      // this.service.setMaterials(updatedMaterials);
    }

    openEditModal(material: Material) {
      this.material = material;
      const editModal = document.getElementById('editModal');
      if (editModal) {
        editModal.style.display = 'block';
      }
    }
    addDescription(){
      console.log("test");
      this.material.description.push("");
      console.log(this.material);
    }
    initMaterial(){
      this.material={ id: 0, image: "", name: "",  description: [] };
    }
    addMaterial(){
      
      this.listMaterials.push(this.material);
    }
}