import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-custom-element';

  constructor() { }

  ngOnInit(): void {

    /** Dynamically DOM created by "document.createElement" */
    const tile = document.createElement('dashboard-tile');
    tile.setAttribute('class', 'col-lg-4 col-md-3 col-sm-2');
    tile.setAttribute('a', '1');
    tile.setAttribute('b', '2');
    tile.setAttribute('c', '3');
    const content = document.getElementById('content');
    content.appendChild(tile);

  }

}
