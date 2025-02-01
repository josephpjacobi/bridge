import { Contract } from '../Contracts/types';
import { workOrderItems, workOrders } from '../data';
import { WorkOrder, WorkOrderItems } from '../WorkOrders/types';

export const getWorkOrderByWorkOrderId = (
  workOrderId: WorkOrder['id']
) =>
  workOrders.filter((workOrder) => {
    return workOrder.id === workOrderId;
  });

export const getWorkOrderByContractId = (
  contractId: Contract['id']
) => {
  return workOrders.filter(
    (workOrder) => workOrder.contractId === contractId
  );
};

export const getAllWorkOrdersByMarinaId = (marinaId: number) => {
  return workOrders.filter((workOrder) => {
    return workOrder.marinaId === marinaId;
  });
};

export const getAllWorkOrderItemsByWorkOrderId = (
  workOrderId: WorkOrder['id']
) => {
  return workOrderItems.filter((workOrderItem: WorkOrderItems) => {
    return workOrderItem.workOrderId === workOrderId;
  });
};

// Handles the case of an owner having more than 1 boat
export const getAllWorkOrdersByInventoryIds = (
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
