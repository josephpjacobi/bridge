import { workOrderItems, workOrders } from '../data';
import { WorkOrder, WorkOrderItems } from '../WorkOrders/types';

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
