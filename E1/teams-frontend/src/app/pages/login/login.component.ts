import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public fetchService: FetchService) {}

  credentials: any = {
    usuario: '',
    contrasena: '',
  };

  async loginAttemp() {
    await this.fetchService.logginAtemp(this.credentials);
  }
}
