import { Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface ContractTableProps {
  rowData: any;
}

export const ContractList = ({ rowData }: ContractTableProps) => {
  // Define columns for contract list
  const columns: GridColDef[] = [
    { field: 'status', headerName: 'Contract Status', width: 150 },
    {
      field: 'deliveryMethod',
      headerName: 'Delivery Method',
      width: 150,
    },
  ];

  return (
    <Stack>
      <h2>Contracts</h2>
      <DataGrid rows={rowData} columns={columns} />
    </Stack>
  );
};
