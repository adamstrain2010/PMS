import { Component, OnInit } from '@angular/core';
import { NavLink } from './../../models/nav-link.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  navLinks: NavLink[] = [];

  constructor() { 
    this.getNavLinks();
  }

  ngOnInit(): void {
  }

  getNavLinks = () => {
    let links: string[] = ['dashboard', 'reservations', 'availability', 'login']
    for(let i = 0; i < links.length; i++){
      let thisNavLink: NavLink = new NavLink(links[i], `/${links[i]}`, true);
      this.navLinks.push(thisNavLink);
    }
  }

}
