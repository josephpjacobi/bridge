import { List, ListItem } from '@mui/material';
import { Invoice } from './types';
import { getInvoiceByInvoiceId } from '../api/invoices';

interface InvoiceDetailsProps {
  invoiceId: Invoice['id'];
}

export const InvoiceDetails = ({
  invoiceId,
}: InvoiceDetailsProps) => {
  const invoiceData = getInvoiceByInvoiceId(invoiceId)[0];
  const { createdAt, dateDue, dateSent, datePaid, status } =
    invoiceData;

  return (
    <List>
      <ListItem>Date created: {createdAt}</ListItem>
      <ListItem>Date sent: {dateSent}</ListItem>
      <ListItem>Due date: {dateDue}</ListItem>
      <ListItem>Date complete: {datePaid}</ListItem>
      <ListItem>Status: {status}</ListItem>
      <ListItem>total:</ListItem>
    </List>
  );
};
