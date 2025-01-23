import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

export const CustomerList = () => {
  // fetch all customers

  // convert to correct format

  // pass to DataGrid

  // need contact info
  const rows: GridRowsProp = [
    {
      id: 1,
      firstName: 'Joe',
      lastName: 'Jacobi',
      address: '20 Pine Lane',
      city: 'Bayville',
      state: 'NY',
      zipCode: '11709',
      vessel: 'link',
      profileLink: 'profile link',
    },
    {
      id: 2,
      firstName: 'Julia',
      lastName: 'Riva',
      address: '20 Pine Lane',
      city: 'Bayville',
      state: 'NY',
      zipCode: '11709',
      vessel: 'link',
      profileLink: 'profile link',
    },
    {
      id: 3,
      firstName: 'Derek',
      lastName: 'Jacobi',
      address: 'address1',
      city: 'Northport',
      state: 'NY',
      zipCode: '12345',
      vessel: 'link',
      profileLink: 'profile link',
    },
    {
      id: 4,
      firstName: 'Gab',
      lastName: 'Femia',
      address: 'address1',
      city: 'Northport',
      state: 'NY',
      zipCode: '12345',
      vessel: 'link',
      profileLink: 'profile link',
    },
  ];

  // Define columns for customer list
  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'address', headerName: 'Address', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'state', headerName: 'State', width: 150 },
    { field: 'zipCode', headerName: 'Zip code', width: 150 },
    { field: 'vessel', headerName: 'Vessel', width: 150 },
    { field: 'profileLink', headerName: 'Profile', width: 150 },
  ];

  return (
    <div>
      <h1>Customer List</h1>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
