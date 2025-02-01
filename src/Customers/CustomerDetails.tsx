import { List, ListItem } from '@mui/material';
import { MarinaCustomer } from './types';
import { getCustomerByMarinaCustomerId } from '../api/customers';

interface CustomerDetailsProps {
  marinaCustomerId: MarinaCustomer['id'];
}

export const CustomerDetails = ({
  marinaCustomerId,
}: CustomerDetailsProps) => {
  const customerData =
    getCustomerByMarinaCustomerId(marinaCustomerId)[0];

  const {
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    email,
    phone,
  } = customerData;

  return (
    <List>
      <ListItem>Name: {`${firstName} ${lastName}`}</ListItem>
      <ListItem>
        Address: {`${address} ${city}, ${state} ${zipCode}`}
      </ListItem>
      <ListItem>email: {email}</ListItem>
      <ListItem>phone number: {phone}</ListItem>
    </List>
  );
};
