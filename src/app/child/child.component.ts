import { Component, computed, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {

  
  constructor() {
    // Used for auto emit values to parent component
    // effect(() => {
    //   this.calculatedDiameter.emit(this.getDiameter());
    // });
  }
  
  // "comingFromParent" - name should match with the exported parent variable name
  comingFromParent = input('');

  // "circleRadius" - name should match with the exported parent variable name
  circleRadius = input<number>(0);

  // Calculation for the Diameter
  getDiameter = computed(() => this.circleRadius() * 2);

  // ============== Export result to a Parent ================ //
  // An output signal/event to pass data to Parent. -> "calculatedDiameter"- will be emitted to the parent
  calculatedDiameter = output<number>();

  sendDiameterToParent () {
    this.calculatedDiameter.emit(this.getDiameter());
  }
}
