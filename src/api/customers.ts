import { Customer, MarinaCustomer } from '../Customers/types';
import { marinaCustomers, customers } from '../data';

// Store API requests for customer data

// Customers
export const getAllMarinaCustomersByMarinaId = (
  marinaId: number // Move this to new file
) =>
  marinaCustomers.filter(
    (marinaCustomer) => marinaCustomer.marinaId === marinaId
  );

export const getCustomersByMarinaId = (marinaId: number) => {
  const customerIds = marinaCustomers
    .filter((customer) => customer.marinaId === marinaId)
    .map((marinaCustomer) => marinaCustomer.marinaCustomerId);

  return customers.filter((customer) =>
    customerIds.includes(customer.id)
  );
};

// Customer - single record
export const getCustomerByMarinaCustomerId = (
  marinaCustomerId: MarinaCustomer['id']
): Customer[] => {
  const ownerRecord = marinaCustomers.find(
    (marinaCustomer) => marinaCustomer.id === marinaCustomerId
  );

  if (ownerRecord === undefined) {
    return [];
  }

  return customers.filter(
    (customer) => customer.id === ownerRecord.id
  );
};
