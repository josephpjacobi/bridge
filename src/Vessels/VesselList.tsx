import { Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { getVesselsByMarinaCustomerId } from '../api/vessels';
import { VesselListProps } from './types';

/* Extract this out, VesselList should take a list of Vessels and strictly be presentational */
export const VesselList = ({
  marinaCustomerId,
  marinaId,
}: VesselListProps) => {
  const vesselsCustomerOwns = getVesselsByMarinaCustomerId(
    marinaId,
    marinaCustomerId
  );

  const rows: GridRowsProp = vesselsCustomerOwns;

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
      <DataGrid rows={rows} columns={columns} />
    </Stack>
  );
};
