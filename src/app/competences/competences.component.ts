import { Component, OnInit } from '@angular/core';
import { faCss3, faHtml5, faJava, faJs, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  php = faPhp;
  java = faJava;
  python = faPython;
  html = faHtml5;
  css = faCss3;
  javaScript = faJs;

  constructor() { }

  ngOnInit(): void {
  }

}
