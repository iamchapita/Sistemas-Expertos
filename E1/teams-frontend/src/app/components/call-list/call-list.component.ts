import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.scss'],
})
export class CallListComponent {
  @Input() loggedUser: any;
  @Input() isCallActive: boolean;
}
