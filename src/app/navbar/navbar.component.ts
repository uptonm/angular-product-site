import { Component, OnInit, Input } from '@angular/core';
import { authentication } from '../shared/authentication.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() appTitle: string;
  auth: authentication;
  serviceSub;
  constructor(private appService: AppService) {}

  ngOnInit() {
    // this.auth = this.appService.getAuth();
  }
}
