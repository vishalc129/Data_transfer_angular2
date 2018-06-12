import { Component, OnInit ,OnDestroy} from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit,OnDestroy {

  constructor(private data:DataService) { }

  news:any;
  careers:any;
  ngOnInit() {
    this.news = this.data.news;
  }
ngOnDestroy(){
  this.data.careers = this.careers ;
  }
}
