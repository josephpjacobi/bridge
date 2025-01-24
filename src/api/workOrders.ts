import { workOrders } from '../data';

export const getAllWorkOrdersByInventoryId = (
  marinaId: number,
  inventoryIds: number[]
) => {
  return workOrders.filter((workOrder) => {
    return (
      workOrder.marinaId === marinaId &&
      inventoryIds.includes(workOrder.inventoryId)
    );
  });
};
