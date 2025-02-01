export interface CustomerListProps {
  marinaId: number;
}

export interface CustomerInfoSectionProps {
  marinaCustomerId: number;
}

export interface ApiProperties {
  id: number;
  updatedAt: string;
  createdAt: string;
}

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  updatedAt: string;
  createdAt: string;
}

export interface MarinaCustomer {
  id: number;
  marinaId: number;
  marinaCustomerId: number; // I don't know why I have this
  inventoryId: number;
  updatedAt: string;
  createdAt: string;
}
