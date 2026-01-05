import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './simple-reactive-form.component.html',
  styleUrl: './simple-reactive-form.component.css'
})

export class SimpleReactiveFormComponent {
  
  fullName = new FormControl();
  password = new FormControl();
  country = new FormControl();

  submitForm() {
    // Show alert
    alert('FullName : ' + this.fullName.value + '\n' 
      + 'Password : ' + this.password.value + '\n'
      + ' Country : ' + this.country.value);
    
    // Reset fields
    this.fullName.reset();
    this.password.reset();
  }
}
