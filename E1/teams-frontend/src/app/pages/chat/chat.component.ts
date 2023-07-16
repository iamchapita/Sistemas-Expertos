import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  loggedUser: any;
  users: any;
  id: string | null;
  isChatActive: boolean;
  isCallActive: boolean;
  areImagesAdded: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserDetails();
    this.isChatActive = true;
  }

  async getUserDetails() {
    let response = await fetch(`http://localhost:3000/usuarios/${this.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let responseJSON = await response.json();
    this.loggedUser = responseJSON;
    this.getUsers();
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
    this.addProfilePic();
    // console.log(this.users);
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

  changeView(): void {
    this.isChatActive = !this.isChatActive;
    this.isCallActive = !this.isCallActive;
  }
}
