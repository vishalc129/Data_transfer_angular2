import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user:string;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
   // this.usersService.cast.subscribe(user => this.user = user)
  }

}
