import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  template: `<img src="/assets/logo.svg" />`,
  styles: [
    `
      img {
        margin: 0 auto;
        margin-top: 32px;
      }
    `,
  ],
})
export class LogoComponent {}
