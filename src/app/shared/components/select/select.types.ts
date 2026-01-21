export interface SelectItem<T = any> {
  label: string;
  value: T;
}

// multiselect types

export interface OptionItem {
  id: string | number;
  label: string;
  selected?: boolean;
}


