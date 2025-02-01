import { Contract, ContractItem } from '../Contracts/types';
import { contractItems, contracts } from '../data';
import { WorkOrder } from '../WorkOrders/types';
import { getWorkOrderByWorkOrderId } from './workOrders';

export const getContractByContractId = (contractId: Contract['id']) =>
  contracts.filter((contract) => {
    return contract.id === contractId;
  });

export const getAllContractsByMarinaId = (marinaId: number) => {
  return contracts.filter((contract) => {
    return contract.marinaId === marinaId;
  });
};

export const getContractsByInventoryId = (
  marinaId: number,
  inventoryIds: number[]
) => {
  return contracts.filter((contract) => {
    return (
      contract.marinaId === marinaId &&
      inventoryIds.includes(contract.inventoryId)
    );
  });
};

export const getContractByWorkOrderId = (
  workOrderId: WorkOrder['id']
) => {
  const workOrderForContract =
    getWorkOrderByWorkOrderId(workOrderId)[0];
  return getContractByContractId(workOrderForContract.contractId);
};

export const getAllContractItemsByContractId = (
  contractId: Contract['id']
) => {
  return contractItems.filter((contractItem: ContractItem) => {
    return contractItem.contractId === contractId;
  });
};
