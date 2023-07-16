import { Component } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-message-input',
  templateUrl: './chat-message-input.component.html',
  styleUrls: ['./chat-message-input.component.scss'],
})
export class ChatMessageInputComponent {
  faPaperPlane = faPaperPlane;
}
