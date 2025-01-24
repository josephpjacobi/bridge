import { CustomerProfileProps } from './types';
import { CustomerInfoSection } from './CustomInfoSection';
import { Stack } from '@mui/material';
import { VesselList } from '../Vessels/VesselList';

export const CustomerProfile = ({
  marinaCustomer,
  marinaId,
}: CustomerProfileProps) => {
  return (
    <Stack>
      <CustomerInfoSection marinaCustomerId={marinaCustomer.id} />
      {/* Extract this out, VesselList should take a list of Vessels and strictly be presentational */}
      <VesselList
        marinaId={marinaId}
        marinaCustomerId={marinaCustomer.id}
      />
      {/* // <ContractTable />
      // <WorkOrderTable />
      // <InvoiceTable /> */}
    </Stack>
  );
};
