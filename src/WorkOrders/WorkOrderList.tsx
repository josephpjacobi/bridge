import { Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface WorkOrderListProps {
  rowData: any;
}

export const WorkOrderList = ({ rowData }: WorkOrderListProps) => {
  // Define columns for work orders list
  const columns: GridColDef[] = [
    { field: 'status', headerName: 'Contract Status', width: 150 },
    {
      field: 'inventoryId',
      headerName: 'Vessel ID',
      width: 150,
    },
    {
      field: 'contractId',
      headerName: 'Contract Id',
      width: 150,
    },
  ];

  return (
    <Stack>
      <h2>Work Orders</h2>
      <DataGrid rows={rowData} columns={columns} />
    </Stack>
  );
};
