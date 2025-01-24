import { invoices } from '../data';

export const getInvoicesByMarinaCustomerId = (
  marinaCustomerId: number
) => {
  return invoices.filter((invoice) => {
    return invoice.marinaCustomerId === marinaCustomerId;
  });
};
