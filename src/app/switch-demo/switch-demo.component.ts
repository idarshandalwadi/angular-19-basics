import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  imports: [],
  templateUrl: './switch-demo.component.html',
  styleUrl: './switch-demo.component.css'
})
export class SwitchDemoComponent {
  
  shapeName = "rectangle";

  changeShape(shapeName: string) {
    this.shapeName = shapeName;
  }

}
