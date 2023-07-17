import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss'],
})
export class ChatDetailsComponent implements OnInit {
  conversationId: string | null;
  receiverName: string | null;
  users: any;
  messages: any;
  receiverImage: string;
  receiver: any;
  receiverId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.conversationId = this.route.snapshot.paramMap.get('id');
    this.receiverName = this.route.snapshot.paramMap.get('receiverName');
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
    this.getMessages();
    this.receiver = this.users.find(
      (user: any) => user.nombre === this.receiverName
    );

    if (this.receiver) {
      this.receiverImage = this.receiver.imagen;
      this.receiverId = this.receiver.id;
    }
  }

  async getMessages() {
    let response = await fetch(
      `http://localhost:3000/conversaciones/${this.conversationId}/mensajes`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    let responseJSON = await response.json();
    this.messages = responseJSON;

    this.messages = this.messages.reverse();
    console.log(this.messages);
  }
}
