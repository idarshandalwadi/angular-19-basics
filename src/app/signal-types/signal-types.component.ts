import { Component, WritableSignal, computed, effect, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-types',
  imports: [FormsModule],
  templateUrl: './signal-types.component.html',
  styleUrl: './signal-types.component.css'
})

export class SignalTypesComponent {

  constructor() {
    effect(() => {
      console.log('effect() method is invoked when you updates the signal value.');
      console.log(this.firstName());
    });
  }

  // A way to explicitly define wriatble singal
  writeMe: WritableSignal<number> = signal(100);

  firstName = signal<string>('');
  lastName : WritableSignal<string> = signal('Dalwadi');

  // computed OR read-only signals: Thye are read-only signals that derive their value
  // from other signals. You can define computed signals using the computed() and specifying a derivation.
  fullName = computed(() => this.firstName() + ' ' +  this.lastName());
  // Readonly signal, is dependent on the writeMe() signal, when writeMe get update, readonlySignal()
  // should also get updated. - You cannot directly assign values to a computed signal.

  // Add object into array;
  colors = signal(["Red" , "Green"]);
  newColor = signal('');

  someMethod() {

    console.log("Before updating a base signal value: " + this.fullName());
    console.log("After changing value of x to 20 from 50: " + this.fullName());

    // Add new element to singal Array;
    this.colors.update(colors => [...colors, this.newColor()]);
    console.log("Updated Array with spread operator : " + this.colors())

    // Can't use set() and update() with readonly/computed signal.
    // this.computedSignal.set(200);
    // this.computedSignal.update((crntValue) => crntValue + 100);
  }


  company = signal('Dell');
  product = signal('Laptop');
  productFullName = linkedSignal({ 
    source: this.company, // Base singal
    computation: (newValue, previousValue) => {
      const companyProduct = newValue + ' ' + this.product();
      return companyProduct;
    }
  });

}
