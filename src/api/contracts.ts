import { contracts } from '../data';

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
