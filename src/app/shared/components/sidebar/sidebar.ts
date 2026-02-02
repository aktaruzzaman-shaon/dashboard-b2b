import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isSidebarOpen = false;
  menuItems: MenuItem[] = [
    {
      label: 'Bookings',
      icon: '📅',
      expanded: false,
      children: [
        { label: 'My Bookings', icon: '', route: '/bookings/my-bookings' },
        { label: 'My Quotations', icon: '', route: '/bookings/quotations' },
      ],
    },
    {
      label: 'My Operations',
      icon: '⚙️',
      expanded: false,
      children: [
        { label: 'Activities Operations', icon: '', route: '/operations/activities' },
        { label: 'Hotels Operations', icon: '', route: '/operations/hotels' },
        { label: 'Cruises Operations', icon: '', route: '/operations/cruises' },
        { label: 'Holidays Operations', icon: '', route: '/operations/holidays' },
        { label: 'Visas Operations', icon: '', route: '/operations/visas' },
        { label: 'Yachts Operations', icon: '', route: '/operations/yachts' },
      ],
    },
    {
      label: 'Accounts',
      icon: '👤',
      route: '/accounts',
    },
    {
      label: 'Markup',
      icon: '💰',
      route: '/markup',
    },
    {
      label: 'Logout',
      icon: '🚪',
      route: '/logout',
    },
  ];

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleMenuItem(item: MenuItem): void {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
}
