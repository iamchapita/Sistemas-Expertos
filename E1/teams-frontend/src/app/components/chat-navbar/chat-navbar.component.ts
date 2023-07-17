import { Component, Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.scss'],
})
export class ChatNavbarComponent {
  faArrowLeft = faArrowLeft;
  @Input() receiverName: string | null;
  @Input() receiverImage: string | null;
}