import { Component } from '@angular/core';
import { MockServiceService } from './services/mock-service.service';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string = '';

  constructor(private _router: Router, public _mockService: MockServiceService){}

  checkLoggedIn = () => {
    this.currentRoute = this._router.getCurrentNavigation().extractedUrl.root.children.primary.segments['0'].path;
    if(this.currentRoute != 'login'){
      console.log(this._mockService);
      this._mockService.loggedIn = true;
    }
  }
}
