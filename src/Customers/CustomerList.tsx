import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { getCustomersByMarinaId } from '../api/customers';
import { CustomerProfile } from './CustomerProfile';
import { Customer, CustomerListProps } from './types';

/*
 *  CustomerList is used to display a list of customers given a marinaId
 **/
export const CustomerList = ({ marinaId }: CustomerListProps) => {
  const customers: Customer[] = getCustomersByMarinaId(marinaId);

  const rows: GridRowsProp = customers;

  // Define columns for customer list
  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'address', headerName: 'Address', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'state', headerName: 'State', width: 150 },
    { field: 'zipCode', headerName: 'Zip code', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
  ];

  return (
    <div>
      <h1>Customer List</h1>
      <DataGrid rows={rows} columns={columns} />
      <CustomerProfile
        marinaId={marinaId}
        marinaCustomer={customers[0]}
      />
    </div>
  );
};
