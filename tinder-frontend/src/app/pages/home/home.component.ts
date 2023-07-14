import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AxiosService } from 'src/app/services/axios-service.service';
import { Users } from 'src/app/models/user.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [NavbarComponent],
})
export class HomeComponent implements OnInit {
	id: string | null;
	isUserActive: boolean = false;
	isFireActive: boolean = true;
	isStarActive: boolean = false;
	users: Users[] = [];
	user: Users;


	constructor(private route: ActivatedRoute, private service: AxiosService) {}

	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id');
		this.getInterestsById();
	}

	getInterestsById(): void {
		const id = this.id ? parseInt(this.id) : null;

		this.service
			.getRegisteredUsers()
			.then((data) => {
				[this.user] = data.filter((user: Users) => user.id === id);

				this.users = data.filter(
					(innerUser: Users) =>
						innerUser.id !== id &&
						this.user.generoInteres.includes(innerUser.genero)
				);

				// console.log(this.users);
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
