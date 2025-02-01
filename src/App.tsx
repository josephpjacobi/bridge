import { Route, Routes } from 'react-router';
import './App.css';
import { CustomerList } from './Customers/CustomerList';
import { CustomerProfile } from './Customers/CustomerProfile';
import { contracts, customers, invoices, workOrders } from './data';
import { Vessels } from './Vessels/Vessels';
import { Contracts } from './Contracts/Contracts';
import { Invoices } from './Invoices/Invoices';
import { ContractView } from './Contracts/ContractView';
import { WorkOrderView } from './WorkOrders/WorkOrderView';
import { InvoiceView } from './Invoices/InvoiceView';

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
        <Route
          path="/customers"
          element={<CustomerList marinaId={1} />}
        />
        <Route
          path="/customer"
          element={
            <CustomerProfile
              marinaId={1}
              marinaCustomer={customers[0]}
            />
          }
        />
        <Route path="/vessels" element={<Vessels marinaId={1} />} />
        <Route path="/vessel" element={<Vessels marinaId={1} />} />
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
          element={<Invoices marinaId={1} />}
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
