export interface StatusButtonData {
  label: string;
  value: 'Pending' | 'Accepted' | 'Rejected' | 'Cancelled' | 'All';
}

export type StatusSize = 'sm' | 'md' | 'lg';
export type StatusColor = 'sky' | 'green' | 'red' | 'yellow' | 'gray';
