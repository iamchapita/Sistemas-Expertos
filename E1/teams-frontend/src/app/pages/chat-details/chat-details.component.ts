import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss'],
})
export class ChatDetailsComponent implements OnInit {
  conversationId: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.conversationId = this.route.snapshot.paramMap.get('id');
  }
}
