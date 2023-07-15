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

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnChanges {
	faHeart = faHeart;
	faCircleChevronLeft = faCircleChevronLeft;
	faCircleChevronRight = faCircleChevronRight;
	@Input() activeUserId: number;
	@Input() isLiked: boolean = false;

	@Output() previousUser: EventEmitter<void> = new EventEmitter<void>();
	@Output() nextUser: EventEmitter<void> = new EventEmitter<void>();

	ngOnChanges(changes: SimpleChanges): void {}

	onHeartButtonClick(): void {
		this.isLiked = !this.isLiked;
	}
}
