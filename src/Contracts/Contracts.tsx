import { getAllContractsByMarinaId } from '../api/contracts';
import { ContractList } from './ContractList';

export interface ContractsProps {
  marinaId: number;
}

export const Contracts = ({ marinaId }: ContractsProps) => {
  const data = getAllContractsByMarinaId(marinaId);
  return <ContractList rowData={data} />;
};
