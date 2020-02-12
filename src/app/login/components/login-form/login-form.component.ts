import { Component, OnInit } from '@angular/core';
import { User } from './../../../shared/models/user.model';
import { Router } from '@angular/router';
import { MockServiceService } from './../../../services/mock-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: User = new User();
  constructor(private _router: Router, private _mockService: MockServiceService) { }

  ngOnInit(): void {
  }

  tryLogin = () => {
    this._router.navigateByUrl('/dashboard');
    this._mockService.loggedIn = true;
  }

}
