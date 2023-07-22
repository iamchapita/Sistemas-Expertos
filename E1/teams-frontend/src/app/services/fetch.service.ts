import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private router: Router) {}

  // Login
  loggedUser: any;
  loginStatus: boolean;

  async logginAtemp(credentials: any) {
    let response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    let responseJSON = await response.json();

    this.loggedUser = responseJSON.usuario;

    if (responseJSON.exito === false) {
      this.loginStatus = false;
    } else {
      this.router.navigate([`/chat/${this.loggedUser.id}`]);
    }
  }
}
