import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();

  currentPageTitle = 'Yacht Operation';
  userName = 'Rayna Tourism';

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
