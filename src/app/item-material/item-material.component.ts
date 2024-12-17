import { Component, Input } from '@angular/core';
import { Material } from '../material';

@Component({
  selector: 'app-item-material',
  templateUrl: './item-material.component.html',
  styleUrls: ['./item-material.component.css']
})
export class ItemMaterialComponent {
  @Input() material:Material=new Material(0,"","",[]);
}
