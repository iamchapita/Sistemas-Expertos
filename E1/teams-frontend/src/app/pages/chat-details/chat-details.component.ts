import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss'],
})
export class ChatDetailsComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  conversationId: string | null;
  users: any;
  messages: any;
  receiver: any;
  receiverImage: any;
  receiverId: any;
  loggedUser: any;

  constructor(
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) {}

  ngOnInit(): void {
    this.conversationId = this.route.snapshot.paramMap.get('id');
    this.getInitialParameters();
  }

  async getInitialParameters() {
    if (this.fetchService.users === undefined) {
      await this.fetchService.getUsers();
      this.users = await this.fetchService.users;
    }

    if (this.fetchService.loggedUser === undefined) {
      await this.fetchService.getUserDetails(localStorage.getItem('id'));
      this.loggedUser = await this.fetchService.loggedUser;
    }

    await this.fetchService.getMessages(this.conversationId);
    this.users = await this.fetchService.users;
    this.messages = await this.fetchService.messages;
    this.loggedUser = await this.fetchService.loggedUser;
    this.getUserChatUser();
  }

  getUserChatUser() {
    this.receiver = this.users.find(
      (user: any) =>
        user.nombre ===
        this.loggedUser.conversaciones.find(
          (c: any) => c.idConversacion == this.conversationId
        ).nombreDestinatario
    );
    if (this.receiver) {
      this.receiverImage = this.receiver.imagen;
      this.receiverId = this.receiver.id;
    }
  }
}
