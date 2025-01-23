// import { LeaseHolderForm } from '../LeaseHolderForm/LeaseHolderForm';
// import { VesselInformationForm } from '../VesselInformationForm/VesselInformationForm';
// import { InsuranceInformationForm } from '../InsuranceInformationForm/InsuranceInformationForm';

import { checklistItemConfigs } from './Subforms/OffseasonWorkForm/data';
import { OffseasonWorkForm } from './Subforms/OffseasonWorkForm/OffseasonWorkForm';

// import { HaulAndSplashDateForm } from '../HaulSplashForm/HaulSplashForm';
// import { CommentsAndOtherWork } from '../CommentsAndOtherWork/CommentsAndOtherWork';
// import { FormSummary } from '../FormSummary/FormSummay';

export const WinterStorageContract = () => {
  // const [boatName, setBoatName] = React.useState('');
  return (
    <div>
      <h1>Winter Contract</h1>
      {/* <LeaseHolderForm /> */}
      {/* <VesselInformationForm /> */}
      {/* <InsuranceInformationForm /> */}
      <OffseasonWorkForm checklistItems={checklistItemConfigs} />
      {/* <HaulAndSplashDateForm /> */}
      {/* <CommentsAndOtherWork /> */}
      {/* <FormSummary /> */}
    </div>
  );
};
