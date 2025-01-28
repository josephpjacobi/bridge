export interface VesselListProps {
  rowData: Vessel[];
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
