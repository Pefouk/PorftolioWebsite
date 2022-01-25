import { Component, OnInit } from '@angular/core';
import { faBriefcase, faMap, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faBriefCase = faBriefcase;
  faMap = faMap;
  faClock = faClock;
  constructor() { }

  ngOnInit(): void {
  }

}
