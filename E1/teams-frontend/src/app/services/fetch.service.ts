import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  id: any;
  areImagesAdded: boolean;
  users: any;
  messages: any;

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

  async getUserDetails(id: any) {
    let response = await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let responseJSON = await response.json();
    this.loggedUser = responseJSON;
    await this.getUsers();
  }

  async getUsers() {
    let response = await fetch('http://localhost:3000/usuarios/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let responseJSON = await response.json();
    this.users = responseJSON;
  }

  addProfilePic(): void {
    this.loggedUser.conversaciones.forEach((conversacion: any) => {
      if (conversacion.tipo === 'individual') {
        const user = this.users.find(
          (user: any) => user.nombre === conversacion.nombreDestinatario
        );
        if (user) {
          conversacion.imagenDestinatario = user.imagen;
        }
      }
    });

    this.areImagesAdded = true;
  }

  async getMessages(conversationId: any) {
    let response = await fetch(
      `http://localhost:3000/conversaciones/${conversationId}/mensajes`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    let responseJSON = await response.json();
    this.messages = responseJSON;

    // console.log(this.messages)

    // this.messages = this.messages.reverse();
  }

  async sendMessage(message: any) {
    let response = await fetch('http://localhost:3000/mensajes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    let responseJSON = await response.json();

    console.log(responseJSON);
  }
}
