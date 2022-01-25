import { Component, OnInit } from '@angular/core';
import { faBriefcase, faMap, faClock, faIdCard, faEnvelope, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faBriefCase = faBriefcase;
  faMap = faMap;
  faClock = faClock;
  faIdCard = faIdCard;
  faEnveloppe = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faBirthdayCake = faBirthdayCake;
  constructor() { }

  ngOnInit(): void {
  }

}
