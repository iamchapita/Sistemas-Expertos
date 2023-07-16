import { Component, Input } from '@angular/core';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent {
  @Input() loggedUser: any;
  @Input() users: any;
  @Input() areImagesAdded: boolean = false;
  faPeopleGroup = faPeopleGroup;
}
