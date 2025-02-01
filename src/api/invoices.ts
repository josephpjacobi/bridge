import { Contract } from '../Contracts/types';
import { invoices, lineItems, workOrders } from '../data';
import { Invoice, LineItems } from '../Invoices/types';
import { WorkOrder } from '../WorkOrders/types';

export const getInvoiceByInvoiceId = (invoiceId: Invoice['id']) =>
  invoices.filter((invoice) => {
    return invoice.id === invoiceId;
  });

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

export const getInvoiceByWorkOrderId = (
  workOrderId: WorkOrder['id']
) =>
  invoices.filter((invoice) => invoice.workOrderId === workOrderId);

export const getInvoiceByContractId = (
  contractId: Contract['id']
) => {
  const workOrderForContract = workOrders.filter(
    (workOrder) => workOrder.contractId === contractId
  )[0];
  return invoices.filter(
    (invoice) => invoice.workOrderId === workOrderForContract.id
  );
};
