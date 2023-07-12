import { Component, OnInit } from '@angular/core';
import { AxiosServiceService } from '../../services/axios-service.service';
import { Users } from 'src/app/models/user.model';

@Component({
	selector: 'app-profiles-section',
	templateUrl: './profiles-section.component.html',
	styleUrls: ['./profiles-section.component.scss'],
})
export class ProfilesSectionComponent implements OnInit {
	constructor(private service: AxiosServiceService) {}
	users: Users[] = [];

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers(): void {
		this.service
			.getRegisteredUsers()
			.then((data) => {
				this.users = data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
