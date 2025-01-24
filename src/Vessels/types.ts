import { MarinaCustomer } from '../Customers/types';

export interface VesselListProps {
  marinaId: number; // Marina['id]
  marinaCustomerId: MarinaCustomer['id'];
}

export interface Vessel {
  id: number;
  year: number;
  boatName?: string;
  length: number;
  make: string;
  model: string;
  updatedAt: string;
  createdAt: string;
}
