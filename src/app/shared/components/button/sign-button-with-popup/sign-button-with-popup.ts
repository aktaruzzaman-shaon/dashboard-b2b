import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-sign-button-with-popup',
  imports: [],
  templateUrl: './sign-button-with-popup.html',
  styleUrl: './sign-button-with-popup.css',
})
export class SignButtonWithPopup {
  label = input<string>('Open Menu');
  isOpen = signal(false);
  toggle() {
    this.isOpen.update((v) => !v);
  }
  close() {
    this.isOpen.set(false);
  }
}
