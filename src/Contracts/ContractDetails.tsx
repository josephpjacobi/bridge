import { List, ListItem } from '@mui/material';
import { Contract } from './types';
import { getContractByContractId } from '../api/contracts';

interface ContractDetailsProps {
  contractId: Contract['id'];
}

export const ContractDetails = ({
  contractId,
}: ContractDetailsProps) => {
  const contractData = getContractByContractId(contractId)[0];
  const { status } = contractData;

  return (
    <List>
      <ListItem>Contract Type: Spring</ListItem>
      <ListItem>Status: {status}</ListItem>
      <ListItem>Total items: </ListItem>
    </List>
  );
};
