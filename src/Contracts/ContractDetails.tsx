import { getAllContractItemsByContractId } from '../api/contracts';
import { contractItemType } from '../data';
import { Contract, ContractItemType } from './types';

interface ContractDetailProps {
  contractId: Contract['id'];
}

export const ContractDetails = ({
  contractId,
}: ContractDetailProps) => {
  const contractItems = getAllContractItemsByContractId(
    contractId
  ).map((item) => {
    return contractItemType.filter(
      (itemType) => item.itemTypeId === itemType.id
    )[0];
  });

  return (
    <div>
      <h3>Contract Details</h3>
      {contractItems.map((item: ContractItemType) => {
        return (
          <div>
            <p>{`${item.title} - ${item.description}`}</p>
          </div>
        );
      })}
    </div>
  );
};
