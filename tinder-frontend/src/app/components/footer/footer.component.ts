import { Component, Output, EventEmitter, Input } from '@angular/core';
import {
	faHeart,
	faCircleChevronLeft,
	faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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

	@Output() previousUser: EventEmitter<void> = new EventEmitter<void>();
	@Output() nextUser: EventEmitter<void> = new EventEmitter<void>();

	onHeartButtonClick(): void {
		console.log(this.activeUserId);
	}
}
