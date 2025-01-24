import { CustomerProfileProps } from './types';
import { CustomerInfoSection } from './CustomInfoSection';
import { Stack } from '@mui/material';
import { VesselList } from '../Vessels/VesselList';
import { ContractList } from '../Contracts/ContractList';
import { getAllInventoryIdsOwnedByCustomer } from '../api/vessels';
import { getContractsByInventoryId } from '../api/contracts';
import { WorkOrderList } from '../WorkOrders/WorkOrderList';
import { getAllWorkOrdersByInventoryId } from '../api/workOrders';
import { InvoiceList } from '../Invoices/InvoiceList';
import { getInvoicesByMarinaCustomerId } from '../api/invoices';

export const CustomerProfile = ({
  marinaCustomer,
  marinaId,
}: CustomerProfileProps) => {
  const inventoryIds = getAllInventoryIdsOwnedByCustomer(
    marinaId,
    marinaCustomer
  );

  const workOrders = getAllWorkOrdersByInventoryId(
    marinaId,
    inventoryIds
  );

  const invoices = getInvoicesByMarinaCustomerId(marinaCustomer.id);

  return (
    <Stack>
      <CustomerInfoSection marinaCustomerId={marinaCustomer.id} />
      {/* Extract this out, VesselList should take a list of Vessels and strictly be presentational */}
      <VesselList
        marinaId={marinaId}
        marinaCustomerId={marinaCustomer.id}
      />
      <ContractList
        rowData={getContractsByInventoryId(marinaId, inventoryIds)}
      />
      <WorkOrderList rowData={workOrders} />
      <InvoiceList rowData={invoices} />
    </Stack>
  );
};
