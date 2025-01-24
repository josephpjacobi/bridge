import { Stack, List, ListItem } from '@mui/material';
import { CustomerInfoSectionProps } from './types';
import { getCustomerByMarinaCustomerId } from '../api/customers';

export const CustomerInfoSection = ({
  marinaCustomerId,
}: CustomerInfoSectionProps) => {
  const customerInfo =
    getCustomerByMarinaCustomerId(marinaCustomerId);

  if (customerInfo === undefined) {
    return (
      <div>Cannot find customer with ID: {marinaCustomerId}</div>
    );
  }

  const {
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    email,
    phone,
  } = customerInfo;

  return (
    <Stack>
      <h1>Customer Info</h1>
      <Stack>
        <h2>Owner Details</h2>
        <List>
          <ListItem>Name: {`${firstName} ${lastName}`}</ListItem>
          <ListItem>
            Address: {`${address} ${city}, ${state} ${zipCode}`}
          </ListItem>
        </List>
      </Stack>
      <h2>Contact</h2>
      <List>
        <ListItem>email: {email}</ListItem>
        <ListItem>phone number: {phone}</ListItem>
      </List>
    </Stack>
  );
};
