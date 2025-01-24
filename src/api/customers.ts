import { Customer, MarinaCustomer } from '../Customers/types';
import { marinaCustomers, customers } from '../data';

// Store API requests for customer data

// Customers
export const getCustomersByMarinaId = (marinaId: number) => {
  const marinaCustomerIds = marinaCustomers
    .filter((customer) => customer.marinaId === marinaId)
    .map((marinaCustomer) => marinaCustomer.id);

  return customers.filter((customer) =>
    marinaCustomerIds.includes(customer.id)
  );
};

// Customer - single record
export const getCustomerByMarinaCustomerId = (
  marinaCustomerId: MarinaCustomer['id']
): Customer | undefined => {
  const ownerRecord = marinaCustomers.find(
    (marinaCustomer) => marinaCustomer.id === marinaCustomerId
  );

  if (ownerRecord === undefined) {
    return;
  }

  return customers.find((customer) => customer.id === ownerRecord.id);
};
