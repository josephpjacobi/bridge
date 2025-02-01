export interface Invoice {
  id: number;
  status: string;
  marinaId: number;
  workOrderId: number;
  vesselId: number;
  marinaCustomerId: number;
  dateSent: string;
  dateDue?: string;
  datePaid?: string;
  updatedAt: string;
  createdAt: string;
}
