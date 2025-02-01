import { getVesselByInventoryId } from '../api/vessels';
import { contracts, lineItemType, workOrders } from '../data';
import { VesselDetails } from '../Vessels/VesselDetails';
import { CustomerDetails } from '../Customers/CustomerDetails';
import { getCustomerByMarinaCustomerId } from '../api/customers';
import { Invoice, LineItemType } from './types';
import { ContractDetails } from '../Contracts/ContractDetails';
import { getAllInvoiceItemsByInvoiceId } from '../api/invoices';
import { WorkOrderDetails } from '../WorkOrders/WorkOrderDetails';

interface InvoiceViewProps {
  invoice: Invoice;
}

export const InvoiceView = ({ invoice }: InvoiceViewProps) => {
  const invoiceItems = getAllInvoiceItemsByInvoiceId(invoice.id).map(
    (item) => {
      return lineItemType.filter(
        (itemType) => item.itemType === itemType.id
      )[0];
    }
  );

  const customerData = getCustomerByMarinaCustomerId(
    invoice.marinaCustomerId
  )[0];
  const vesselData = getVesselByInventoryId(invoice.inventoryId)[0];
  const workOrderData = workOrders[0];
  const contractData = contracts[0];

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
          customerData={customerData}
        />
        <VesselDetails vesselData={vesselData} />
        {workOrderData && (
          <WorkOrderDetails workOrderData={workOrderData} />
        )}
        {contractData && (
          <ContractDetails contractData={contractData} />
        )}
      </div>
    </div>
  );
};
