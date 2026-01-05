import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})

export class TemplateDrivenFormComponent {
  // Our model
  student: Student = {
    name: '',
    class: '',
    city: null, // Given null to get 'Select Country' always selected in UI. 
    phoneNo: '',
    address: '',
  };

  submitForm(studentForm: NgForm) {
    console.log(studentForm.value);
    studentForm.reset();
  }
}

interface Student {
  name: string;
  class: string;
  city: string | null;
  phoneNo: string;
  address: string;
}
