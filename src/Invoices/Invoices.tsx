import { getInvoicesByMarinaId } from '../api/invoices';
import { InvoiceList } from './InvoiceList';

export interface InvoiceProps {
  marinaId: number;
}

export const Invoices = ({ marinaId }: InvoiceProps) => {
  const data = getInvoicesByMarinaId(marinaId);
  return <InvoiceList rowData={data} />;
};
