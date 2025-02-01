import { List, ListItem } from '@mui/material';
import { Invoice } from './types';

interface InvoiceDetailsProps {
  invoiceData: Invoice;
}

export const InvoiceDetails = ({
  invoiceData,
}: InvoiceDetailsProps) => {
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
