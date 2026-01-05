 import { Component, inject } from '@angular/core';
import { SharedService } from '../services/shared-service';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})

export class ReceiverComponent {
  
  // import shared service (Which has common signals)
  protected sharedService = inject(SharedService);

}
