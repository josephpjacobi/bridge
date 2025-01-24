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

/*
 * CustomerProfile is an overview page for an individual customer. In this component, you will find
 *  customer information such as name, address, contact information, and vessels, contracts, work orders
 *  and invoices associated with that customer.
 *
 * I think the only prop needed is a marinaCustomer instance. It has data that links to the marina,
 * vessel and owner info
 **/
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
