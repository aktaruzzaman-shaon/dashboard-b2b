import { Component, computed, input, output, signal } from '@angular/core';
import { SelectItem } from '../select.types';

@Component({
  selector: 'app-single-select',
  imports: [],
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.css',
})
export class SingleSelectComponent {
  // ───────── Inputs ─────────
  items = input<SelectItem<string>[]>([]);
  placeholder = input<string>('Select option');

  // ───────── Output ─────────
  selectChange = output<SelectItem<string>>();

  // ───────── Internal State ─────────
  isOpen = signal(false);
  searchTerm = signal('');
  selectedItem = signal<SelectItem<string> | null>(null);

  // ───────── Computed ─────────
  filteredItems = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.items().filter((item) => item.label.toLowerCase().includes(term));
  });

  displayLabel = computed(() => {
    if (this.selectedItem()) return this.selectedItem()!.label;
    if (this.items().length > 0) return this.items()[0].label;
    return this.placeholder();
  });

  // ───────── Actions ─────────
  toggle(): void {
    this.isOpen.update((v) => !v);
    this.searchTerm.set('');
  }

  select(item: SelectItem<string>): void {
    this.selectedItem.set(item);
    this.isOpen.set(false);
    this.selectChange.emit(item);
  }
}
