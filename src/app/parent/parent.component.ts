import { Component, input, output, signal } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {

  // =========== Send Output from Child =========== //
  // Normal variable
  passMetoChild : string = 'Coming From Parent Component!';

  // Signal variable
  radius = signal<number>(0);

  // =========== Receive Output from Child =========== //
  // Initially(when app just loaded), diameter is not calculated so you dont have a value.
  // You should use "number|null" as default type and "null" as a default value.
  // null represents “no value yet” — and TypeScript forces you to acknowledge that.
  receivedDiameter = signal<number|null>(null);

  onDiameterReceived(value: number) {
    this.receivedDiameter.set(value);
  }
}
