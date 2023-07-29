import { Component, Input } from '@angular/core';
import { faArrowTurnUp, faArrowTurnDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.scss'],
})
export class CallListComponent {
  @Input() loggedUser: any;
  @Input() isCallActive: boolean;
  faArrowTurnUp = faArrowTurnUp;
  faArrowTurnDown = faArrowTurnDown;
  faCircleInfo = faCircleInfo;

  calls: any = [
    {
      name: "Nombre",
      image: false,
      callType: "incoming",
      minutesAgo: "30 min",
      time: "8:45",
    },
    {
      name: "Pedrito",
      image: false,
      callType: "outgoing",
      minutesAgo: "30 min",
      time: "8:00",
    },
    {
      name: "Lorena",
      image: false,
      callType: "outgoing",
      minutesAgo: "30 min",
      time: "9:00",
    },
  ]

  getIcon(call: any) {
    return (call.callType === "outgoing") ? this.faArrowTurnUp : this.faArrowTurnDown;
  }
}
