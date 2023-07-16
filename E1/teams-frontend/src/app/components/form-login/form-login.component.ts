import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  constructor(private router: Router) {}

  loginStatus: boolean;
  loggedUser: any;

  credentials: any = {
    usuario: '',
    contrasena: '',
  };

  async loginAttemp() {
    let response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.credentials),
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
