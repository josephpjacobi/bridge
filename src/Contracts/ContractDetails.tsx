import { List, ListItem } from '@mui/material';
import { Contract } from './types';

interface ContractDetailsProps {
  contractData: Contract;
}

export const ContractDetails = ({
  contractData,
}: ContractDetailsProps) => {
  const { status } = contractData;

  return (
    <List>
      <ListItem>Contract Type: Spring</ListItem>
      <ListItem>Status: {status}</ListItem>
      <ListItem>Total items: </ListItem>
    </List>
  );
};
