import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dr n. med. Leopold Glasner';
  isSmallScreen = false;
  getIsSmallScreen(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 590;

    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.isSmallScreen = this.getIsSmallScreen();
    window.onresize = () => {
      this.isSmallScreen = this.getIsSmallScreen();
    };
  }
}
