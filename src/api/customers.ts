import { marinaCustomers, owners } from '../data';

export const getCustomersByMarinaId = (marinaId: number) => {
  const marinaCustomerIds = marinaCustomers
    .filter((customer) => customer.marinaId === marinaId)
    .map((marinaCustomer) => marinaCustomer.id);

  return owners.filter((owner) =>
    marinaCustomerIds.includes(owner.id)
  );
};
