import { List, ListItem } from '@mui/material';
import { Customer } from './types';

interface CustomerDetailsProps {
  customerData: Customer;
}

export const CustomerDetails = ({
  customerData,
}: CustomerDetailsProps) => {
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
