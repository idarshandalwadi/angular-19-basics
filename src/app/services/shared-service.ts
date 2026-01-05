import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// It has shared signals that is used by different components.
export class SharedService {

  constructor() {
    
  }

  // signal which can be shared across components.
  message = signal("I'm from shared service, I'm Editable.");

  // if u just want to read signal value use below variable.
  readonlyMsg = this.message.asReadonly();

  // Facility to update a signal from component
  updateMessage(newMsg: string) {
    this.message.set(newMsg);
  }

}
