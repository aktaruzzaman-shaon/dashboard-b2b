import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  imports: [],
  templateUrl: './settings-button.html',
  styleUrl: './settings-button.css',
})
export class SettingsButton {
  label = input.required<string>();
  buttonLabel = input.required<string>();

  onButtonClick = output<void>();
  onIconClick = output<boolean>();

  isModalOpen = signal(false);

  handleButtonClick() {
    this.onButtonClick.emit();
  }

  toggleModal() {
    this.isModalOpen.update((value) => !value);
    this.onIconClick.emit(this.isModalOpen());
  }

  // Method to close modal from outside if needed
  closeModal() {
    this.isModalOpen.set(false);
    this.onIconClick.emit(false);
  }
}
