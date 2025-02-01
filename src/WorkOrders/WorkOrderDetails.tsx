import { List, ListItem } from '@mui/material';
import { WorkOrder } from './types';

interface WorkOrderDetailsProps {
  workOrderData: WorkOrder;
}

export const WorkOrderDetails = ({
  workOrderData,
}: WorkOrderDetailsProps) => {
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
