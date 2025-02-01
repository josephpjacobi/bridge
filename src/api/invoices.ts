import { invoices, lineItems } from '../data';
import { Invoice, LineItems } from '../Invoices/types';

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

export const getAllInvoiceItemsByInvoiceId = (
  contractId: Invoice['id']
) => {
  return lineItems.filter((contractItem: LineItems) => {
    return contractItem.invoiceId === contractId;
  });
};
