import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  about1:any;
  ngOnInit() {
    this.about1 = this.route.snapshot.params['foo'];
  }

}
