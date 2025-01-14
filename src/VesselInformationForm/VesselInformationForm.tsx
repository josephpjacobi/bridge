import React from 'react';
import { VesselInformationFormState } from './types';

export const VesselInformationForm = () => {
  const [vesselInfoFormState, setVesselInfoFormState] =
    React.useState<VesselInformationFormState>({
      vesselName: '',
      registrationNumber: '',
      yearBuilt: '',
      make: '',
      length: '',
    });

  const { vesselName, registrationNumber, yearBuilt, make, length } =
    vesselInfoFormState;

  return (
    <div>
      <h2>Vessel Information:</h2>
      <label htmlFor="vesselName">
        Vessel name:
        <input
          id="vesselName"
          type="text"
          name="vesselName"
          value={vesselName}
          onChange={(e) =>
            setVesselInfoFormState({
              ...vesselInfoFormState,
              vesselName: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="registrationNumber">
        Registration number:
        <input
          id="registrationNumber"
          type="text"
          name="registrationNumber"
          value={registrationNumber}
          onChange={(e) =>
            setVesselInfoFormState({
              ...vesselInfoFormState,
              registrationNumber: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="yearBuilt">
        Year built:
        <input
          id="yearBuilt"
          type="text"
          name="yearBuilt"
          value={yearBuilt}
          onChange={(e) =>
            setVesselInfoFormState({
              ...vesselInfoFormState,
              yearBuilt: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="make">
        Make:
        <input
          id="make"
          type="text"
          name="make"
          value={make}
          onChange={(e) =>
            setVesselInfoFormState({
              ...vesselInfoFormState,
              make: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="length">
        Length:
        <input
          id="length"
          type="text"
          name="length"
          value={length}
          onChange={(e) =>
            setVesselInfoFormState({
              ...vesselInfoFormState,
              length: e.target.value,
            })
          }
        />
      </label>
    </div>
  );
};
