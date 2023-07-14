import { Component, Output, EventEmitter } from '@angular/core';
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

	@Output() previousUser: EventEmitter<void> = new EventEmitter<void>();
	@Output() nextUser: EventEmitter<void> = new EventEmitter<void>();
}
