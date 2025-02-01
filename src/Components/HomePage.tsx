import { Link, List, ListItem } from '@mui/material';

export const HomePage = () => {
  return (
    <List>
      <ListItem>
        <Link href="/customers">Customers</Link>
      </ListItem>
      <ListItem>
        <Link href="/vessels">Boat Inventory</Link>
      </ListItem>
      <ListItem>
        <Link href="/workorders">Work Orders</Link>
      </ListItem>
      <ListItem>
        <Link href="/invoices">Invoices</Link>
      </ListItem>
      <ListItem>
        <Link href="/contracts">Contracts</Link>
      </ListItem>
    </List>
  );
};
