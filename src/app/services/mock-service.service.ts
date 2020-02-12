import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  loggedIn:boolean = false;
  currentTitle:string = '';

  constructor() { }
}
