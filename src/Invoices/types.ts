export interface Invoice {
  id: number;
  status: string;
  marinaId: number;
  workOrderId: number;
  inventoryId: number;
  marinaCustomerId: number;
  dateSent: string;
  dateDue?: string;
  datePaid?: string;
  updatedAt: string;
  createdAt: string;
}

export interface LineItems {
  id: number;
  invoiceId: number;
  itemType: number;
  price: number;
  hours: number;
  updatedAt: string;
  createdAt: string;
}

export interface LineItemType {
  id: number;
  title: string;
  description: string;
}
