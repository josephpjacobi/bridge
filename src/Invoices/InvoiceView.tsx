import { VesselDetails } from '../Vessels/VesselDetails';
import { CustomerDetails } from '../Customers/CustomerDetails';
import { Invoice, LineItemType } from './types';
import { ContractDetails } from '../Contracts/ContractDetails';
import {
  getAllInvoiceItemsByInvoiceId,
  getInvoiceByInvoiceId,
} from '../api/invoices';
import { WorkOrderDetails } from '../WorkOrders/WorkOrderDetails';
import { getContractByWorkOrderId } from '../api/contracts';
import { lineItemType } from '../data';

interface InvoiceViewProps {
  invoiceId: Invoice['id'];
}

export const InvoiceView = ({ invoiceId }: InvoiceViewProps) => {
  const invoice = getInvoiceByInvoiceId(invoiceId)[0];
  const invoiceItems = getAllInvoiceItemsByInvoiceId(invoice.id).map(
    (item) => {
      return lineItemType.filter(
        (itemType) => item.itemType === itemType.id
      )[0];
    }
  );

  const contract = getContractByWorkOrderId(invoice.workOrderId)[0];

  return (
    <div>
      <h1>Invoice details</h1>
      {/* Contract items could either go above or below the customer and vessel info section */}
      {/* I'm actually thinking of 4 small sections in a row: customer info - vessel info - work order info - invoice info
            The bulk of the page will be a list of contract items, with the info above readily available. These sections can link to
            their respective detail page
      */}
      <h4>Invoice status: {invoice.status}</h4>
      <h4>Invoice items</h4>
      {invoiceItems.map((item: LineItemType) => {
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
          marinaCustomerId={invoice.marinaCustomerId}
        />
        {invoice.inventoryId && (
          <VesselDetails marinaInventoryId={invoice.inventoryId} />
        )}
        {invoice.workOrderId && (
          <WorkOrderDetails workOrderId={invoice.id} />
        )}
        {contract && <ContractDetails contractId={contract.id} />}
      </div>
    </div>
  );
};
