import { Contract, ContractItem } from '../Contracts/types';
import { contractItems, contracts } from '../data';

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

export const getAllContractItemsByContractId = (
  contractId: Contract['id']
) => {
  return contractItems.filter((contractItem: ContractItem) => {
    return contractItem.contractId === contractId;
  });
};
