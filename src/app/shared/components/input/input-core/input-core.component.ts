import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { rounded, size } from './input-core.types';

@Component({
  selector: 'app-input-core',
  imports: [CommonModule],
  templateUrl: './input-core.component.html',
  styleUrl: './input-core.component.css',
})
export class InputCoreComponent {
  label = input<string>('');
  placeholder = input<string>('');
  value = input<string | number>('');
  type = input<string>('text');

  disabled = input<boolean>(false);
  readonly = input<boolean>(false);
  required = input<boolean>(false);

  error = input<string | null>(null);
  hint = input<string>('');

  size = input<size>('md');
  rounded = input<rounded>('md');

  clearable = input<boolean>(false);
  loading = input<boolean>(false);

  valueChange = output<string | number>();
  hasError = computed(() => !!this.error());

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    console.log(val)
    this.valueChange.emit(val);
  }

  clear() {
    this.valueChange.emit('');
  }
}
