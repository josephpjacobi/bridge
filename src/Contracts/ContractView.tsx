import {
  getAllContractItemsByContractId,
  getContractByContractId,
} from '../api/contracts';
import { contractItemType } from '../data';
import { Contract, ContractItemType } from './types';
import { VesselDetails } from '../Vessels/VesselDetails';
import { CustomerDetails } from '../Customers/CustomerDetails';
import { WorkOrderDetails } from '../WorkOrders/WorkOrderDetails';
import { InvoiceDetails } from '../Invoices/InvoiceDetails';
import { getInvoiceByContractId } from '../api/invoices';
import { getWorkOrderByContractId } from '../api/workOrders';

interface ContractViewProps {
  contractId: Contract['id'];
}

export const ContractView = ({ contractId }: ContractViewProps) => {
  const contract = getContractByContractId(contractId)[0];

  const contractItems = getAllContractItemsByContractId(
    contract.id
  ).map((item) => {
    return contractItemType.filter(
      (itemType) => item.itemTypeId === itemType.id
    )[0];
  });

  const workOrder = getWorkOrderByContractId(contract.id)[0];
  const invoice = getInvoiceByContractId(contract.id)[0];

  return (
    <div>
      <h1>Contract Details</h1>
      {/* Contract items could either go above or below the customer and vessel info section */}
      {/* I'm actually thinking of 4 small sections in a row: customer info - vessel info - work order info - invoice info
            The bulk of the page will be a list of contract items, with the info above readily available. These sections can link to
            their respective detail page
      */}
      <h4>Contract status: {contract.status}</h4>
      <h4>Contract items</h4>
      {contractItems.map((item: ContractItemType) => {
        return (
          <div>
            <p>{`${item.title} - ${item.description}`}</p>
          </div>
        );
      })}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <CustomerDetails
          // I added marinaCustomerId to the Contract type. The other option is to use the inventoryId to get the inventory record, which has marinaCustomerId
          // My thinking is the contract is tied to a specific vessel, we could use the vessel to get the customer information
          marinaCustomerId={contract.marinaCustomerId}
        />
        <VesselDetails marinaInventoryId={contract.inventoryId} />
        {workOrder && <WorkOrderDetails workOrderId={workOrder.id} />}
        {invoice && <InvoiceDetails invoiceId={invoice.id} />}
      </div>
    </div>
  );
};
