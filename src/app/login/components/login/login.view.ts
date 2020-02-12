import { Component, OnInit } from '@angular/core';
import { MockServiceService } from './../../../services/mock-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginView implements OnInit {
  
  constructor(public mockService: MockServiceService) { 
    this.mockService.loggedIn = false;
  }

  ngOnInit(): void {
  }

}
