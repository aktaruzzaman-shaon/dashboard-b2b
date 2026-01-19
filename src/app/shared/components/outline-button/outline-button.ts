import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-outline-button',
  imports: [CommonModule],
  templateUrl: './outline-button.html',
  styleUrl: './outline-button.css',
})
export class OutlineButton {
  // Inputs
  label = input<string>('Update Supplier');
  isLoading = input<boolean>(false);
  disabled = input<boolean>(false);

  // Custom classes for extra responsiveness or styling from parent
  customClass = input<string>('');

  // Click Event
  btnClick = output<void>();
  handleClick() {
    if (!this.disabled() && !this.isLoading()) {
      this.btnClick.emit();
    }
  }
}
