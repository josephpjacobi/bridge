import { getAllContractItemsByContractId } from '../api/contracts';
import { workItemType } from '../data';
import { VesselDetails } from '../Vessels/VesselDetails';
import { CustomerDetails } from '../Customers/CustomerDetails';
import { InvoiceDetails } from '../Invoices/InvoiceDetails';
import { WorkOrder, WorkOrderItemType } from './types';
import { ContractDetails } from '../Contracts/ContractDetails';
import { getWorkOrderByWorkOrderId } from '../api/workOrders';
import { getInvoiceByWorkOrderId } from '../api/invoices';

interface WorkOrderViewProps {
  workOrderId: WorkOrder['id'];
}

export const WorkOrderView = ({
  workOrderId,
}: WorkOrderViewProps) => {
  const workOrder = getWorkOrderByWorkOrderId(workOrderId)[0];
  const workOrderItems = getAllContractItemsByContractId(
    workOrder.id
  ).map((item) => {
    return workItemType.filter(
      (itemType) => item.itemTypeId === itemType.id
    )[0];
  });

  const invoice = getInvoiceByWorkOrderId(workOrderId)[0];

  return (
    <div>
      <h1>Work order details</h1>
      {/* Contract items could either go above or below the customer and vessel info section */}
      {/* I'm actually thinking of 4 small sections in a row: customer info - vessel info - work order info - invoice info
            The bulk of the page will be a list of contract items, with the info above readily available. These sections can link to
            their respective detail page
      */}
      <h4>Work order Status: {workOrder.status}</h4>
      <h4>Work order items</h4>
      {workOrderItems.map((item: WorkOrderItemType) => {
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
          marinaCustomerId={workOrder.marinaCustomerId}
        />
        {workOrder.inventoryId && (
          <VesselDetails marinaInventoryId={workOrder.inventoryId} />
        )}
        {invoice && <InvoiceDetails invoiceId={invoice.id} />}
        {workOrder.contractId && (
          <ContractDetails contractId={workOrder.contractId} />
        )}
      </div>
    </div>
  );
};
