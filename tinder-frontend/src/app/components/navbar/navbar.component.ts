import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnChanges {
	faCoffee = faCoffee;
	faFireFlameCurved = faFireFlameCurved;
	faUser = faUser;
	faStar = faStar;

	ngOnChanges(changes: SimpleChanges): void {}

	@Input() isUserActive = true;
	@Input() isFireActive = false;
	@Input() isStarActive = false;

	@Output() onSectionClick: EventEmitter<void> = new EventEmitter<void>();
}
