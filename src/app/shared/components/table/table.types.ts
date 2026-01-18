export interface Booking {
  travelDate: string;
  reference: string;
  optionName: string;
  type: string;
  startTime: string;
  duration: string;
  guests: string;
  sold: {
    cost: number;
    sale: number;
  };
  confirmation: string;
  supplier: string;
  status: 'Pending' | 'Accepted' | 'Cancelled';
  user: string;
  provider: string;
}
