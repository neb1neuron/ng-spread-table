import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = {
    demo: 'demo',
    docs: 'docs',
  }

  selectedPage = this.pages.demo;

  setPage(page: string) {
    this.selectedPage = page;
  }
}

