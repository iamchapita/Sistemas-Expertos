import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';

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
  isGroupActive: boolean;
  areImagesAdded: boolean;

  constructor(
    private route: ActivatedRoute,
    private fetchService: FetchService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInitialParameters();
    this.isChatActive = true;
  }

  async getInitialParameters() {
    await this.fetchService.getUserDetails(this.id);
    this.loggedUser = await this.fetchService.loggedUser;
    this.fetchService.addProfilePic();
    localStorage.setItem('id', this.loggedUser.id);
    this.users = await this.fetchService.users;
    this.areImagesAdded = this.fetchService.areImagesAdded;
  }

  changeView(id:any): void {
    console.log(id);
    if(id === 1){
      this.isChatActive = true;
      this.isGroupActive = false;
      this.isCallActive = false;
      return;
    }
    if(id === 2){
      this.isChatActive = false;
      this.isGroupActive = true;
      this.isCallActive = false;
      return;
    }
    if(id === 3){
      this.isChatActive = false;
      this.isGroupActive = false;
      this.isCallActive = true;
      return;
    }
  }
}
