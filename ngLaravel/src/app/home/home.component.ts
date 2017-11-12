import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  title = 'Angular 5 + Material Design';

  constructor(private router: Router) {
    // constructor initialization
  }

  ngOnInit() {

  }

  /**
   * Use this method to open auth page
   */
  openAuth() {
    this.router.navigate(['/auth']);
  }
}
