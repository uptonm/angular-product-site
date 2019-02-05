import { Injectable, OnInit } from '@angular/core';
import { content } from './shared/content.interface';
import { authentication } from './shared/authentication.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {
  sampleContent: content = {
    home: {
      title: 'Hello, World!',
      lead:
        'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
      meta:
        'It uses utility classes for typography and spacing to space content out within the larger container.',
      link: 'about',
      link_title: 'Learn More'
    }
  };
  sampleAuth: Subject<authentication> = new Subject<authentication>();
  constructor() {}

  ngOnInit() {
    this.sampleAuth.next({
      isLoggedIn: true,
      first: 'Mike',
      last: 'Upton',
      email: 'uptonm@wit.edu'
    });
  }

  getContent(): content {
    return this.sampleContent;
  }

  setContent(field: string, data: string): void {
    if (this.sampleContent.hasOwnProperty(field)) {
      this.sampleContent[field] = data;
    } else {
      return;
    }
  }

  getAuth() {
    return this.sampleAuth;
  }

  logOut(): void {
    this.sampleAuth.next({
      isLoggedIn: false
    });
  }

  logIn(): void {
    this.sampleAuth.next({
      isLoggedIn: true,
      first: 'Mike',
      last: 'Upton',
      email: 'uptonm@wit.edu'
    });
  }
}
