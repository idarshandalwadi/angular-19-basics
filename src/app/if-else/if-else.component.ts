import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {


  showDiv = true;

  isCircle = true;
  toggleShapes() {
    this.isCircle=!this.isCircle;
  }
}
