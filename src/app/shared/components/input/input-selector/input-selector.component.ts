import { Component, computed, ElementRef, inject, input, output, signal } from '@angular/core';
import { DateRangeOption } from './input-selector.types';

@Component({
  selector: 'app-input-selector',
  imports: [],
  templateUrl: './input-selector.component.html',
  styleUrl: './input-selector.component.css',
})
export class InputSelectorComponent {
  // --- Signal Inputs ---
  label = input.required<string>();
  options = input.required<DateRangeOption[]>();
  // Example of a non-required input with a default value
  disabled = input<boolean>(false); 

  // --- Outputs ---
  selectionChange = output<DateRangeOption[]>();

  // --- Dependency Injection ---
  private elementRef = inject(ElementRef);

  // --- Internal State (Signals) ---
  isOpen = signal<boolean>(false);
  selectedOptions = signal<DateRangeOption[]>([]);

  // --- Derived State (Computed) ---
  selectedIds = computed(() => new Set(this.selectedOptions().map(o => o.id)));

  toggleDropdown() {
    if (this.disabled()) return;
    this.isOpen.update(v => !v);
  }

  closeDropdown() {
    this.isOpen.set(false);
  }

  handleSelect(option: DateRangeOption) {
    this.selectedOptions.update(current => {
      const exists = current.some(item => item.id === option.id);
      const updated = exists 
        ? current.filter(item => item.id !== option.id) 
        : [...current, option];
      
      this.selectionChange.emit(updated);
      return updated;
    });
  }

  removeOption(event: Event, optionId: string) {
    event.stopPropagation();
    this.selectedOptions.update(current => {
      const updated = current.filter(item => item.id !== optionId);
      this.selectionChange.emit(updated);
      return updated;
    });
  }

  onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isOpen()) {
      this.closeDropdown();
    }
  }
}
