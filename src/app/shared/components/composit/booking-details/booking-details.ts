import { Component, input, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  imports: [],
  templateUrl: './booking-details.html',
  styleUrl: './booking-details.css',
})
export class BookingDetails {
  reference = input<string>();
  goBack = output<void>();

  bookingDetails = signal<any>(null);
  isLoading = signal<boolean>(false);

  details = {
    guestName: 'Ashish Nehra',
    reference: 'AGT416182310',
    email: 'ashishnehra@raynatours.com',
    phone: '+971 12 1235 2356',
    totalPrice: 200,
    currency: 'AED',
    status: 'Pending',
    yachtDetails: {
      title: 'From Dubai Marina Sightseeing Yacht',
      imageUrl: 'assets/yacht-demo.jpg', // Path to your yacht image
      date: '25 Sep 2024',
      category: 'Private Yacht',
      time: '03:00 PM - 07:00 PM',
      duration: '5 Hours',
      pax: '8 Adults 4 Child 2 Infant',
      cancellationDeadline: '05 Aug 2024 04:29',
      confirmationNumber: 'TRA2541654',
      user: 'Rajesh Verma',
      provider: 'Paramount Tourism',
      supplier: 'Ashish Nehra',
      location: 'Al Barsha South, Dubai',
    },
  };

  // ngOnInit() {
  //   this.loadData();
  // }

  // for loading deatails data
  // loadData() {
  //   this.isLoading.set(true);
  //   this.bookingService.getBookingByRef(this.reference).subscribe({
  //     next: (data) => {
  //       this.bookingDetails.set(data);
  //       this.isLoading.set(false);
  //     },
  //     error: () => this.isLoading.set(false),
  //   });
  // }
}
