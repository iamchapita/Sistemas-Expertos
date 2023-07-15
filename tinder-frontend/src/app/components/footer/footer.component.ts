import {
	Component,
	Output,
	EventEmitter,
	Input,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import {
	faHeart,
	faCircleChevronLeft,
	faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Users } from 'src/app/models/user.model';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	faHeart = faHeart;
	faCircleChevronLeft = faCircleChevronLeft;
	faCircleChevronRight = faCircleChevronRight;
	@Input() activeUserId: number;
	@Input() isLiked: boolean;
	@Input() user: Users;
	@Input() users: Users[];

	@Output() previousUser: EventEmitter<void> = new EventEmitter<void>();
	@Output() nextUser: EventEmitter<void> = new EventEmitter<void>();
	@Output() onHeartButtonClick: EventEmitter<void> = new EventEmitter<void>();
}
