import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit,OnDestroy {

  news:any;
  careers:any;
  constructor(private data:DataService) { }


  ngOnInit() {
    this.careers = this.data.careers;
  }
  ngOnDestroy(){
    this.data.news = this.news;
  }

}
