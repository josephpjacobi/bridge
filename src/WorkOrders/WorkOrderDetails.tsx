import { List, ListItem } from '@mui/material';
import { WorkOrder } from './types';
import { getWorkOrderByWorkOrderId } from '../api/workOrders';

interface WorkOrderDetailsProps {
  workOrderId: WorkOrder['id'];
}

export const WorkOrderDetails = ({
  workOrderId,
}: WorkOrderDetailsProps) => {
  const workOrderData = getWorkOrderByWorkOrderId(workOrderId)[0];
  const { status } = workOrderData;

  return (
    <List>
      <ListItem>Date started:</ListItem>
      <ListItem>Status: {status}</ListItem>
      <ListItem>Completed items:</ListItem>
      <ListItem>Total items: </ListItem>
    </List>
  );
};
