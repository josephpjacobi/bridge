export interface WorkOrder {
  id: number;
  status: string;
  marinaId: number;
  marinaCustomerId: number;
  inventoryId: number;
  contractId: number;
  updatedAt: string;
  createdAt: string;
}

export interface WorkOrderItems {
  id: number;
  workOrderId: number;
  workItemTypeId: number;
  status: string;
  updatedAt: string;
  createdAt: string;
}

export interface WorkOrderItemType {
  id: number;
  marinaId: number;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}
