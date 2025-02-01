type ContractStatus = 'sent' | 'opened' | 'complete' | 'abandoned';

type ContractDeliveryMethod = 'mail' | 'email';

export interface Contract {
  id: number;
  status: ContractStatus;
  marinaId: number;
  marinaCustomerId: number;
  inventoryId: number;
  deliveryMethod: ContractDeliveryMethod;
  updatedAt: string;
  createdAt: string;
}

export interface ContractItem {
  id: number;
  contractId: number;
  itemTypeId: number;
  updatedAt: string;
  createdAt: string;
}

export interface ContractItemType {
  id: number;
  title: string;
  marinaId: number;
  description: string;
  updatedAt: string;
  createdAt: string;
}
