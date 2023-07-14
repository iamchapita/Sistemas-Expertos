import { Component, Input } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-interests',
	templateUrl: './interests.component.html',
	styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent {
	@Input() user: Users;
	showInterests: boolean = true;

	faCircleCheck = faCircleCheck;
	faLocationDot = faLocationDot;
	faBriefcase = faBriefcase;
}
