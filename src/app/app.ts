import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { SingleSelectComponent } from './shared/components/select/single-select/single-select.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, SingleSelectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dashboard');
  options = [
    { label: 'Apple', value: 1 },
    { label: 'Banana', value: 2 },
    { label: 'Orange', value: 3 },
  ];

  onSelect(item: any) {
    console.log('Selected item:', item);
  }
}
