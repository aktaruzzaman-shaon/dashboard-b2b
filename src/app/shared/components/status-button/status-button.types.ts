export interface StatusButtonData {
  label: string; // e.g. 'Pending'
  count?: number; // e.g. 30
  value?: string; // for filtering later
}

export type StatusSize = 'sm' | 'md' | 'lg';
export type StatusColor = 'sky' | 'green' | 'red' | 'yellow' | 'gray';
