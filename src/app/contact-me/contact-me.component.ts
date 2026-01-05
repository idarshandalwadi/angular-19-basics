import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})

export class ContactMeComponent {

  private formBuilder = inject(FormBuilder); // Inject FormBuilder
  
  // Create a FormGroup and add Form elements
  contactForm = this.formBuilder.group({
    fullName: ['',[Validators.required]],
    email: ['',[Validators.email, Validators.required]],
    comment: ['',[Validators.maxLength(200)]],
  });

  onFormSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset(); // To reset/empty the form values
  }

  // ========== FormArray ========== //

  // Note: Skills array is created using the FormBuilder directly.
  demoFormArray = this.formBuilder.group({
    userName : ['',[Validators.required]],
    // Initialized with empty control array
    skills: this.formBuilder.array([])
  })

  // Getter to access skill array / FormArray
  get skills() : FormArray {
    // use get() on the FormGroup (demoFormArray) object to retrive the skills as FormArray. 
    return this.demoFormArray.get('skills') as FormArray;
  }

  // Update a skill array / FormArray
  // Note, we have user formBuilder object to add a new form control/element
  addSkill() {
    console.log('Index : ' + this.skills.length);
    this.skills.push(this.formBuilder.control('', Validators.required));
  }

  // Remove a specific skill using index
  removeSkill(index: number) {
    console.log('Index : ' + index);
    
    this.skills.removeAt(index);
  }

  submitFormArray() {
    console.log(this.demoFormArray.value);
  }

}
