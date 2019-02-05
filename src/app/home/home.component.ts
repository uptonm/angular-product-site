import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { content } from '../shared/content.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: Object;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.content = this.appService.getContent().home;
  }
}
