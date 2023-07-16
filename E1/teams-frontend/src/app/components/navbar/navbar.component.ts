import { Component, Input, OnInit } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() id: string | null;
  loggedUser: any;
  faUserAlt = faUserAlt;

  ngOnInit(): void {
    this.getUserDetails();
  }

  async getUserDetails() {
    let response = await fetch(`http://localhost:3000/usuarios/${this.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let responseJSON = await response.json();
    this.loggedUser = responseJSON;
    console.log(this.loggedUser);
  }
}
