import { Stack } from '@mui/material';
import { CustomerInfoSectionProps } from './types';
import { CustomerDetails } from './CustomerDetails';

export const CustomerInfoSection = ({
  marinaCustomerId,
}: CustomerInfoSectionProps) => {
  return (
    <Stack>
      <h1>Customer Info</h1>
      <CustomerDetails marinaCustomerId={marinaCustomerId} />
    </Stack>
  );
};
