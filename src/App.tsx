import { Route, Routes } from 'react-router';
import './App.css';
import { CustomerList } from './Customers/CustomerList';
import { CustomerProfile } from './Customers/CustomerProfile';
import { customers } from './data';

// INSTALL REACT ROUTER
// CREATE THE JUMP PAGE
//    ADD CUSTOMER LIST TO JUMP PAGE

// REUSE VesselList TO RENDER ALL INVOICES FOR A MARINA
// IMPLEMENT Vessel DETAILS PAGE
// Add to jump page

// REUSE ContractList TO RENDER ALL Contracts FOR A MARINA
// IMPLEMENT A Contract DETAILS PAGE
// Add to jump page

// REUSE WorkOrderList TO RENDER ALL Work Orders FOR A MARINA
// IMPLEMENT AN work order DETAILS PAGE
// Add to jump page

// REUSE INVOICELIST TO RENDER ALL INVOICES FOR A MARINA
// IMPLEMENT AN INVOICE DETAILS PAGE
// Add to jump page

// Implement Create functionality:
//    Customer
//    Vessel
//    Contract
//    Work Order
//    Invoice

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
      </Routes>
    </div>
  );
}

export default App;
