import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css',
})
export class SignalDemoComponent {
  
  count = 10;

  // It is also known as WritableSignal
  signal_var = signal(100);

  // It can strore number or string as value
  signal_with_type = signal<number | string>(100);

  user = signal({ name: 'Darshan', email: 'dd@gmail.com', city: 'Viramgam' });

  constructor() {
    effect(() => {
      // Signal has effect when it updates
      console.log('From Effects Method -> Signal Var : ' + this.signal_var());
      console.log('Singal value changed to String from bnumber : ' + this.signal_with_type());
    });
  }

  updateNormalVar() {
    // No effects triggers for this
    console.log("From Update Method -> Normal Variable : " + ++this.count);

    this.signal_var.set(this.signal_var() + 10);
    console.log('Using Set Method:(added +10 into value) : ' + this.signal_var());

    this.signal_var.update((currentVal) => currentVal + 20);
    console.log( "Added 20 using update() method : " + this.signal_var());

    this.user.set({ name: 'Kishan', email: 'kd@gmail.com', city: 'Viramgam' })
    console.log("Updated Object Name : " + this.user().name + ' & Email : ' + this.user().email);
  }

  incrementCount() {
    // When it increments effects() will be invoked
    this.signal_var.set(this.signal_var() + 1);
  }

  decrementCount() {
    //When it decrements effects() will be invoked
    this.signal_var.set(this.signal_var() - 1);
  }

  changeValueToString() {
    this.signal_with_type.set("It is converted to String...!");
  }
}
