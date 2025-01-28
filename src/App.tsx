import { Route, Routes } from 'react-router';
import './App.css';
import { CustomerList } from './Customers/CustomerList';
import { CustomerProfile } from './Customers/CustomerProfile';
import { customers } from './data';
import { Vessels } from './Vessels/Vessels';
import { Contracts } from './Contracts/Contracts';
import { Invoices } from './Invoices/Invoices';

// IMPLEMENT A Contract DETAILS PAGE

// IMPLEMENT AN work order DETAILS PAGE

// IMPLEMENT AN INVOICE DETAILS PAGE

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
        <Route path="/vessels" element={<Vessels marinaId={1} />} />
        <Route
          path="/contracts"
          element={<Contracts marinaId={1} />}
        />
        <Route path="/invoices" element={<Invoices marinaId={1} />} />
      </Routes>
    </div>
  );
}

export default App;
