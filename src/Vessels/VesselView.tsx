import { Stack } from '@mui/material';
import { VesselDetails } from './VesselDetails';
import { WorkOrderList } from '../WorkOrders/WorkOrderList';
import { MarinaInventory } from '../MarinaInventory/types';
import { getAllWorkOrdersByInventoryIds } from '../api/workOrders';

interface VesselViewProps {
  inventoryId: MarinaInventory['id'];
}

export const VesselView = ({ inventoryId }: VesselViewProps) => {
  const workHistory = getAllWorkOrdersByInventoryIds(1, [
    inventoryId,
  ]);
  return (
    <Stack>
      <h1>Vessel Details</h1>
      <h2>Info</h2>
      <VesselDetails marinaInventoryId={inventoryId} />
      <h2>Work History</h2>
      <WorkOrderList rowData={workHistory} />
    </Stack>
  );
};
