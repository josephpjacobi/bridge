import React from 'react';
import { InsuranceInfoFormState } from './types';

export const InsuranceInformationForm = () => {
  const [insurnaceInfoFormState, setInsurnaceInfoFormState] =
    React.useState<InsuranceInfoFormState>({
      insuranceCompany: '',
      policyNumber: '',
    });

  const { insuranceCompany, policyNumber } = insurnaceInfoFormState;
  return (
    <div>
      <h2>Insurance Information:</h2>
      <label htmlFor="insuranceCompany">
        Insurance Company:
        <input
          id="insuranceCompany"
          type="text"
          name="insuranceCompany"
          value={insuranceCompany}
          onChange={(e) =>
            setInsurnaceInfoFormState({
              ...insurnaceInfoFormState,
              insuranceCompany: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="policyNumber">
        Policy Number:
        <input
          id="policyNumber"
          type="text"
          name="policyNumber"
          value={policyNumber}
          onChange={(e) =>
            setInsurnaceInfoFormState({
              ...insurnaceInfoFormState,
              policyNumber: e.target.value,
            })
          }
        />
      </label>
    </div>
  );
};
