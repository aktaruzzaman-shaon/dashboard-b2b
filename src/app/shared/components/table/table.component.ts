import { Component, input } from '@angular/core';
import { Booking } from './table.types';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  // selectedRowReference: string = '';

  columns = input<{ key: string; label: string }[]>([]);
  columnVisibility = input<Record<string, boolean>>({});

  bookings: Booking[] = [
    {
      travelDate: '13 Oct 2024',
      reference: '264654654984641',
      optionName: 'From Dubai Marina Sightseeing Yacht',
      type: 'Private',
      startTime: '10:00 AM',
      duration: '4 Hours',
      guests: '8Adult 4 Child 2 Infant',
      sold: { cost: 149, sale: 200 },
      confirmation: 'YCTG5498641',
      supplier: 'Karan Verma',
      status: 'Pending',
      user: 'Rajesh Verma',
      provider: 'Paramount Tourism',
    },
    {
      travelDate: '13 Oct 2024',
      reference: '264654654984642',
      optionName: 'From Dubai Marina Sightseeing Yacht',
      type: 'Private',
      startTime: '10:00 AM',
      duration: '4 Hours',
      guests: '8Adult 4 Child 2 Infant',
      sold: { cost: 149, sale: 200 },
      confirmation: 'YCTG5498641',
      supplier: 'Karan Verma',
      status: 'Accepted',
      user: 'Rajesh Verma',
      provider: 'Paramount Tourism',
    },
  ];

  isVisible(key: string): boolean {
    return this.columnVisibility()[key] !== false;
  }

  visibleColumnCount(): number {
    return this.columns().filter((col) => this.isVisible(col.key)).length;
  }

  onSortColumn(label: string) {
    console.log('Sort by:', label);
  }

  getStatusClass(status: string): string {
    const map = {
      Pending: 'bg-orange-100 text-orange-600',
      Accepted: 'bg-green-100 text-green-600',
      Cancelled: 'bg-red-100 text-red-600',
    };
    return map[status as keyof typeof map] || '';
  }

  // columns = input<{ name: string; value: string }[]>([]);
  // columnVisibility = input<Record<string, boolean>>({});

  // onViewDetails(booking: Booking): void {
  //   console.log('View details:', booking);
  // }

  // isVisible(key: string): boolean {
  //   return this.columnVisibility()[key] !== false;
  // }

  // onTransfer(booking: Booking): void {
  //   console.log('Transfer booking:', booking);
  // }

  // onSearch(booking: Booking): void {
  //   console.log('Search booking:', booking);
  // }

  // onSortColumn(header: string): void {
  //   console.log('Sort by:', header);
  // }

  // onReferenceDetails(booking: Booking): void {
  //   console.log('Reference details clicked:', booking);
  //   // Will open modal later
  // }

  // onOptionNameClick(booking: Booking): void {
  //   console.log('Option name clicked:', booking);
  //   // Will open modal later
  // }

  // onSupplierClick(booking: Booking): void {
  //   console.log('Supplier clicked:', booking);
  //   // Will open modal later
  // }

  // visibleColumnCount = () => this.columns().filter((col) => this.isVisible(col.value)).length;
}
