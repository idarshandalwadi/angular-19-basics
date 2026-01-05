import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-for-loop',
  imports: [RouterLink],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  
  protected router = inject(Router);

  users = [
    {name: 'Darshan', 'email': 'dd@gmail.com', city: 'Viramgam'},
    {name: 'Kishan', 'email': 'kd@gmail.com', city: 'Viramgam'},
    {name: 'Jondy', 'email': 'jondy@gmail.com', city: 'Ahmedabad'},
    {name: 'Vimal', 'email': 'vm@gmail.com', city: 'Junagadh'},
    {name: 'Anushree', 'email': 'anushree@gmail.com', city: 'Ujjain'},
  ]

  goToProfile(userName: string) {
    this.router.navigate(['/profile'], {queryParams: {name: userName}});
    // this.router.navigateByUrl('/profile');
  }
}
