import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Typed('#typed', {
      strings: ['Python Enthusiast', 'Frontend Developer', 'Full Stack Developer'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });
  }
}
