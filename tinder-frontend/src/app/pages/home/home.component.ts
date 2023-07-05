import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

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

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id');
	}
}
