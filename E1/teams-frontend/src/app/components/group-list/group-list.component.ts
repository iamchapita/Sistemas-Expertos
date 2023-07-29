import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit{
  @Input() loggedUser: any;
  @Input() isGroupActive: boolean;
  faPeopleGroup = faPeopleGroup;
  groups: any = []

  constructor(
    private route : ActivatedRoute,
    private fetchService: FetchService
  ){}
  ngOnInit(){
    this.groups = this.fetchService.getGroups()
  }
}
