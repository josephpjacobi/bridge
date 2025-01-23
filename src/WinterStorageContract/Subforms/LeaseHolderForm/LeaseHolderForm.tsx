import React from 'react';
import { LeaseHolderFormState } from './types';

const initialLeaseHolderFormState = {
  firstName: '',
  lastName: '',
  address: '',
  homePhone: '',
  cellPhone: '',
  email: '',
};

export const LeaseHolderForm = () => {
  const [leaseHolderFormState, setLeaseHolderFormState] =
    React.useState<LeaseHolderFormState>(initialLeaseHolderFormState);

  const {
    firstName,
    lastName,
    address,
    homePhone,
    cellPhone,
    email,
  } = leaseHolderFormState;

  const fetchData = () => {
    fetch('http://localhost:3001/testdata', {
      method: 'GET',
    })
      // Handling the response by converting it to JSON
      .then((response) => response.json())
      // Handling the data obtained from the response
      .then((data) => {
        // Update UI with product details from the response
        console.log('DATA', data);
      });
  };

  const createCustomer = () => {
    fetch('http://localhost:3001/customer/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leaseHolderFormState), // Convert your data to JSON format
    })
      .then((response) => {
        // Handle the response
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setLeaseHolderFormState(initialLeaseHolderFormState);
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Do something with the parsed data
        console.log('RETURNED CUSTOMER', data);
      })
      .catch((error) => {
        // Handle errors
        console.error(
          'There was a problem with the fetch operation:',
          error
        );
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <h2>Lease Holder:</h2>
      <label htmlFor="leaseHolderFirstName">
        First name:
        <input
          id="leaseHolderFirstName"
          type="text"
          name="leaseHolderFirstName"
          value={firstName}
          onChange={(e) =>
            setLeaseHolderFormState({
              ...leaseHolderFormState,
              firstName: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="leaseHolderLastName">
        Last name:
        <input
          id="leaseHolderLastName"
          type="text"
          name="leaseHolderLastName"
          value={lastName}
          onChange={(e) =>
            setLeaseHolderFormState({
              ...leaseHolderFormState,
              lastName: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="leaseHolderAddress">
        Address:
        <input
          id="leaseHolderAddress"
          type="text"
          name="leaseHolderAddress"
          value={address}
          onChange={(e) =>
            setLeaseHolderFormState({
              ...leaseHolderFormState,
              address: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="leaseHolderHomePhone">
        Home Phone:
        <input
          id="leaseHolderHomePhone"
          type="text"
          name="leaseHolderHomePhone"
          value={homePhone}
          onChange={(e) =>
            setLeaseHolderFormState({
              ...leaseHolderFormState,
              homePhone: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="leaseHolderCellPhone">
        Cell Phone:
        <input
          id="leaseHolderCellPhone"
          type="text"
          name="leaseHolderCellPhone"
          value={cellPhone}
          onChange={(e) =>
            setLeaseHolderFormState({
              ...leaseHolderFormState,
              cellPhone: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="leaseHolderEmail">
        Email:
        <input
          id="leaseHolderEmail"
          type="text"
          name="leaseHolderCellPhone"
          value={email}
          onChange={(e) =>
            setLeaseHolderFormState({
              ...leaseHolderFormState,
              email: e.target.value,
            })
          }
        />
      </label>
      <button onClick={() => fetchData()}>Fetch Data</button>
      <button onClick={() => createCustomer()}>
        Create Customer
      </button>
    </div>
  );
};
