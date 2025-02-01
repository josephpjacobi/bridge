import { Route, Routes } from 'react-router';
import './App.css';
import { CustomerList } from './Customers/CustomerList';
import { contracts, invoices, workOrders } from './data';
import { Vessels } from './Vessels/Vessels';
import { Contracts } from './Contracts/Contracts';
import { Invoices } from './Invoices/Invoices';
import { ContractView } from './Contracts/ContractView';
import { WorkOrderView } from './WorkOrders/WorkOrderView';
import { InvoiceView } from './Invoices/InvoiceView';
import { HomePage } from './Components/HomePage';
import { WorkOrders } from './WorkOrders/WorkOrders';
import { CustomerView } from './Customers/CustomerView';
import { VesselView } from './Vessels/VesselView';

// Add vessel view with customer info and current / past work

// Implement Create functionality:
//    Customer
//    Vessel
//    Contract
//    Work Order
//    Invoice

// Ideas for a store:
//  marinaId is used everywhere, this needs to be easily accessible
//  activeCustomer --> I am unsure about this, but if we can store: customer info, vessel info, maybe contract/work order/invoice data
//      instead of querying the database for marinaInventory to get vessel, marinaCustomer to get customer. We make this request once and store it

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/customers"
          element={<CustomerList marinaId={1} />}
        />
        <Route
          path="/customer"
          element={
            <CustomerView
              marinaId={1}
              marinaCustomerId={1} // This should come from query params
            />
          }
        />
        <Route path="/vessels" element={<Vessels marinaId={1} />} />
        <Route
          path="/vessel"
          element={<VesselView inventoryId={1} />} // I hardcoded marinaId in this file
        />
        <Route
          path="/contracts"
          element={<Contracts marinaId={1} />}
        />
        <Route
          path="/contract"
          element={<ContractView contract={contracts[0]} />} // This should be contractId
        />
        <Route path="/invoices" element={<Invoices marinaId={1} />} />
        <Route
          path="/invoice"
          element={<InvoiceView invoice={invoices[0]} />} // This should be invoiceId
        />
        <Route
          path="/workOrders"
          element={<WorkOrders marinaId={1} />}
        />
        <Route
          path="/workOrder"
          element={<WorkOrderView workOrder={workOrders[0]} />} // This should be workOrderId
        />
      </Routes>
    </div>
  );
}

export default App;
