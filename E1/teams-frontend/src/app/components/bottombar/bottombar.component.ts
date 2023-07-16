import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  faComment,
  faPeopleGroup,
  faPhone,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent {
  @Input() loggedUser: any;
  @Input() isChatActive: boolean;
  @Input() isCallActive: boolean;

  faComment = faComment;
  faPeopleGroup = faPeopleGroup;
  faPhone = faPhone;
  faEllipsis = faEllipsis;

  @Output() changeView: EventEmitter<void> = new EventEmitter<void>();
}
