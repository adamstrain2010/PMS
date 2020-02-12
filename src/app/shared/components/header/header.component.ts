import { Component, OnInit, Input } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  currentDate = Moment().format("DD/MM/YYYY")

  constructor() { }

  ngOnInit(): void {
  }

}
