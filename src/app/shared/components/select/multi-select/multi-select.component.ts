import { CommonModule } from '@angular/common';
import { Component, computed, input, model, output, signal } from '@angular/core';
import { OptionItem } from '../select.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  imports: [FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css',
})
export class MultiSelect {
  title = input<string>('Select Products');
  options = input.required<OptionItem[]>();
  isVisible = model<boolean>(false);
  selectedValues = output<OptionItem[]>();
  searchTerm = signal('');

  // Computed Signal for filtering
  filteredOptions = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const allOptions = this.options();

    if (!term) return allOptions;

    return allOptions.filter((opt) => opt.label.toLowerCase().includes(term));
  });

  toggleSelectAll() {
    const current = this.filteredOptions();
    const allSelected = current.every((opt) => opt.selected);
    current.forEach((opt) => (opt.selected = !allSelected));
  }

  resetAll() {
    this.options().forEach((opt) => (opt.selected = false));
  }

  submit() {
    const selected = this.options().filter((opt) => opt.selected);
    this.selectedValues.emit(selected);
    this.isVisible.set(false);
  }
}
