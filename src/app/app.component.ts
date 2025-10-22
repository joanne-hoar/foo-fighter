import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
      <h1>Hello World!</h1>
      <p>This is a simple Angular application demonstrating CI/CD with Azure.</p>
      <p>Built with Angular {{angularVersion}}</p>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  angularVersion = '17';
}
