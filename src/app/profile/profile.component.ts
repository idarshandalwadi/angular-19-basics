import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {

  // With Ang 19 "signals" are used to access Routing params, below code is not recommanded.
  // only use if u want to perform complex RxJS operations OR u have static value always.
  protected activatedRoute = inject(ActivatedRoute);
  // nameFromUrlParam = this.activatedRoute.snapshot.paramMap.get('name');
  
  nameFromUrlParam = this.activatedRoute.snapshot.queryParamMap.get('name');
  userId = this.activatedRoute.snapshot.params['id'];
  email = this.activatedRoute.snapshot.params['email'];

  // To get from data attribute
  // nameFromUrlParam = this.activatedRoute.snapshot.data['name'];

  ngOnInit() {
    console.log(this.nameFromUrlParam);
  }
}
