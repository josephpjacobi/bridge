import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';
import { marinaCustomers, owners } from '../data';

interface CustomerListProps {
  marinaId: number;
}

export const CustomerList = ({ marinaId }: CustomerListProps) => {
  const getCustomersByMarinaId = () => {
    const marinaCustomerIds = marinaCustomers
      .filter((customer) => customer.marinaId === marinaId)
      .map((marinaCustomer) => marinaCustomer.id);

    return owners.filter((owner) =>
      marinaCustomerIds.includes(owner.id)
    );
  };

  const [customers, setCustomers] = useState(
    getCustomersByMarinaId()
  );

  // need contact info
  const rows: GridRowsProp = customers.map((customer, index) => {
    return {
      ...customer,
      id: index++,
    };
  });

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
    </div>
  );
};
