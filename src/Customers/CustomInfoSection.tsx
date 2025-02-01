import { Stack } from '@mui/material';
import { CustomerInfoSectionProps } from './types';
import { getCustomerByMarinaCustomerId } from '../api/customers';
import { CustomerDetails } from './CustomerDetails';

export const CustomerInfoSection = ({
  marinaCustomerId,
}: CustomerInfoSectionProps) => {
  const customerData =
    getCustomerByMarinaCustomerId(marinaCustomerId)[0];

  if (customerData === undefined) {
    return (
      <div>Cannot find customer with ID: {marinaCustomerId}</div>
    );
  }

  return (
    <Stack>
      <h1>Customer Info</h1>
      <CustomerDetails customerData={customerData} />
    </Stack>
  );
};
