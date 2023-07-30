import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit{
  faArrowLeft = faArrowLeft;
  faPaperPlane = faPaperPlane;
  faPeopleGroup = faPeopleGroup;
  groupId: string | null;
  groupName: string | null;
  users: any;
  messages: any;
  receivers: any;
  receiverImage: any;
  receiverId: any;
  loggedUser: any;
  message: any = {
    idGrupo: 0,
    emisor: '',
    receptor: null,
    mensaje: '',
    hora: '',
  };

  constructor(
    private fetchService: FetchService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get('id');
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

    await this.fetchService.getGroupMessages(this.groupId);
    this.users = await this.fetchService.users;
    console.log(this.users)
    this.messages = await this.fetchService.messages;
    console.log(this.messages);
    this.loggedUser = await this.fetchService.loggedUser;

    if(this.groupId)
      this.message = {
        idGrupo: parseInt(this.groupId),
        emisor: parseInt(this.loggedUser.id),
        receptor: null,
        mensaje: '',
        hora: '',
      };
    this.groupName = this.loggedUser.conversaciones.find( (c: any) => c.idGrupo == this.groupId).nombreDestinatario;
    console.log(this.groupName);
  }


  async sendMenssage() {
    let now = new Date();
    let formattedTime = now.toLocaleString('es-HN', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    this.message.hora = formattedTime;
    console.log(this.message);
    await this.fetchService.sendMessage(this.message);
    this.message.mensaje = '';
    await this.fetchService.getGroupMessages(this.groupId);
    this.messages = await this.fetchService.messages;
  }

}
