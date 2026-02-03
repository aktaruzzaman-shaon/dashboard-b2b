import { Component, ElementRef, HostListener, input, output, signal } from '@angular/core';
import { SelectMenu } from './selectMenu.type';

@Component({
  selector: 'app-select-menu',
  imports: [],
  templateUrl: './select-menu.html',
  styleUrl: './select-menu.css',
})
export class SelectMenuComponent {
  // Signal Inputs
  label = input<string>('');
  options = input.required<SelectMenu[]>();
  placeholder = input<string>('Select options');

  // Signal Output (emit array)
  onSelection = output<any[]>();

  // State Signals
  isOpen = signal(false);
  selectedOptions = signal<SelectMenu[]>([]);

  uniqueId = `select-${Math.random().toString(36).substring(2, 9)}`;

  constructor(private elementRef: ElementRef) {}

  toggleDropdown() {
    this.isOpen.update((v) => !v);
  }

  isSelected(option: SelectMenu): boolean {
    return this.selectedOptions().some((o) => o.id === option.id);
  }

  toggleOption(option: SelectMenu) {
    const current = this.selectedOptions();

    if (this.isSelected(option)) {
      // Unselect
      this.selectedOptions.set(current.filter((o) => o.id !== option.id));
    } else {
      // Select
      this.selectedOptions.set([...current, option]);
    }

    // Emit only values
    this.onSelection.emit(this.selectedOptions().map((o) => o.value));
  }

  removeOption(option: SelectMenu) {
    this.selectedOptions.set(this.selectedOptions().filter((o) => o.id !== option.id));

    this.onSelection.emit(this.selectedOptions().map((o) => o.value));
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}
