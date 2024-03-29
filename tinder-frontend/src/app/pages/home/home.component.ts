import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AxiosService } from 'src/app/services/axios-service.service';
import { Users } from 'src/app/models/user.model';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [],
})
export class HomeComponent implements OnInit {
	id: string | null;
	isUserActive: boolean = false;
	isFireActive: boolean = true;
	isStarActive: boolean = false;
	users: Users[] = [];
	user: Users;
	ids: number[] = [];
	activeUserId: number;
	iterator: number = 0;
	isLiked: boolean = false;

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

				this.ids = this.users.map((user: Users) => user.id);
				this.activeUserId = this.ids[0];
				this.setIsLiked();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	storeLikes(user: Users): void {
		this.service
			.updateUser(this.user.id, this.user)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	onLikeButton(): void {
		const index = this.user.likes.indexOf(this.activeUserId);
		if (index !== -1) {
			this.user.likes.splice(index, 1);
			this.isLiked = false;
		} else {
			this.user.likes.push(this.activeUserId);
			this.isLiked = true;
		}
		this.storeLikes(this.user);
	}

	showPreviousUser(): void {
		if (this.activeUserId > Math.min(...this.ids)) {
			this.iterator--;
			this.activeUserId = this.ids[this.iterator];
		} else {
			this.iterator = this.ids.length - 1;
			this.activeUserId = this.ids[this.iterator];
		}
		this.setIsLiked();
	}

	showNextUser(): void {
		if (this.iterator < this.ids.length - 1) {
			this.iterator++;
			this.activeUserId = this.ids[this.iterator];
		} else {
			this.iterator = 0;
			this.activeUserId = this.ids[this.iterator];
		}
		this.setIsLiked();
	}

	setIsLiked(): void {
		if (this.user.likes.includes(this.activeUserId)) {
			this.isLiked = true;
		} else {
			this.isLiked = false;
		}
	}

	// Cambio de Sección

	onSectionButtonClick(): void {
		this.isFireActive = !this.isFireActive;
		this.isStarActive = !this.isStarActive;
	}
}
