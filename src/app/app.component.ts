import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 2;
  images = [
    {
      title: 'At the beach',
      url: 'assets/images/beach.jpeg'
    }, {
      title: 'Go to the beach',
      url: 'assets/images/beach2.jpeg'
    }, {
      title: 'end the summer',
      url: 'assets/images/beach3.jpeg'
    }, {
      title: 'At the beach',
      url: 'assets/images/beach.jpeg'
    }, {
      title: 'Go to the beach',
      url: 'assets/images/beach2.jpeg'
    }, {
      title: 'end the summer',
      url: 'assets/images/beach3.jpeg'
    }, {
      title: 'At the beach',
      url: 'assets/images/beach.jpeg'
    }, {
      title: 'Go to the beach',
      url: 'assets/images/beach2.jpeg'
    }, {
      title: 'end the summer',
      url: 'assets/images/beach3.jpeg'
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
