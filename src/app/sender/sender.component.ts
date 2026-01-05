import { Component, inject } from '@angular/core';
import { SharedService } from '../services/shared-service';

@Component({
  selector: 'app-sender',
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})

export class SenderComponent {
  
  // import shared service (Which has common signals)
  protected sharedService = inject(SharedService);

}
