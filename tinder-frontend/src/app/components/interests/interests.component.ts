import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-interests',
	templateUrl: './interests.component.html',
	styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
	id: string | null;
	showInterests: boolean = true;

	constructor(private router: ActivatedRoute) {}

	ngOnInit(): void {
		this.id = this.router.snapshot.paramMap.get('id');
	}
}
