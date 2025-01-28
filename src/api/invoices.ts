import { invoices } from '../data';

export const getInvoicesByMarinaId = (marinaId: number) => {
  return invoices.filter((invoice) => {
    return invoice.marinaId === marinaId;
  });
};

export const getInvoicesByMarinaCustomerId = (
  marinaCustomerId: number
) => {
  return invoices.filter((invoice) => {
    return invoice.marinaCustomerId === marinaCustomerId;
  });
};
