import { Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { marinaCustomers, owners } from '../data';
import { useState } from 'react';

interface CustomerProfileProps {
  marinaCustomerId: number;
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  updatedAt: string;
  createdAt: string;
}

export const CustomerProfile = ({
  marinaCustomerId,
}: CustomerProfileProps) => {
  const getMarinaCustomerById = (
    marinaCustomerId: number
  ): Customer | undefined => {
    const ownerRecord = marinaCustomers.find(
      (marinaCustomer) => (marinaCustomer.id = marinaCustomerId)
    );

    if (ownerRecord === undefined) {
      return;
    }

    return owners.find((owner) => owner.id === ownerRecord.id);
  };

  const [customerInfo, setCustomerInfo] = useState(
    getMarinaCustomerById(marinaCustomerId)
  );

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
    // <CustomerInfo />
    // <VesselInfo />
    // <ContractTable />
    // <WorkOrderTable />
    // <InvoiceTable />
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
