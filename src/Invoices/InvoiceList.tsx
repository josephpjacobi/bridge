import { Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface InvoiceListProps {
  rowData: any;
}

export const InvoiceList = ({ rowData }: InvoiceListProps) => {
  // Define columns for work orders list
  const columns: GridColDef[] = [
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'workOrderId',
      headerName: 'Work Order',
      width: 150,
    },
    {
      field: 'vesselId',
      headerName: 'Vessel',
      width: 150,
    },
    {
      field: 'dateSent',
      headerName: 'Sent Date',
      width: 150,
    },
    {
      field: 'dateDue',
      headerName: 'Due Date',
      width: 150,
    },
  ];

  return (
    <Stack>
      <h2>Invoices</h2>
      <DataGrid rows={rowData} columns={columns} />
    </Stack>
  );
};
