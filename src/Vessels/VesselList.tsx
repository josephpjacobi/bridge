import { Stack } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { VesselListProps } from './types';

/* Extract this out, VesselList should take a list of Vessels and strictly be presentational */
export const VesselList = ({ rowData }: VesselListProps) => {
  // Define columns for vessel list
  const columns: GridColDef[] = [
    { field: 'boatName', headerName: 'Boat name', width: 150 },
    { field: 'length', headerName: 'Length', width: 150 },
    { field: 'make', headerName: 'Make', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 },
    { field: 'year', headerName: 'year', width: 150 },
  ];
  return (
    <Stack>
      <h1>Vessels</h1>
      <DataGrid rows={rowData} columns={columns} />
    </Stack>
  );
};
