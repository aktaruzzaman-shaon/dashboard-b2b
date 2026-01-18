import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { SingleSelectComponent } from './shared/components/select/single-select/single-select.component';
import { TableComponent } from './shared/components/table/table.component';
import { CalenderComponent } from './shared/components/calender/calender.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, SingleSelectComponent, TableComponent, CalenderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dashboard');
  options = [
    { label: 'Dubai ', value: 1 },
    { label: 'Abu Dhabi', value: 2 },
    { label: 'Shariah', value: 3 },
  ];

  onSelect(item: any) {
    console.log('Selected item:', item);
  }
}
