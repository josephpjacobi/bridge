import { List, ListItem } from '@mui/material';
import { Vessel } from './types';

interface VesselDetailsProps {
  vesselData: Vessel;
}

export const VesselDetails = ({ vesselData }: VesselDetailsProps) => {
  const { boatName, length, make, model, year } = vesselData;

  return (
    <List>
      <ListItem>Boat name: {boatName}</ListItem>
      <ListItem>Year: {year}</ListItem>
      <ListItem>Make: {make}</ListItem>
      <ListItem>Model: {model}</ListItem>
      <ListItem>Length: {length}</ListItem>
    </List>
  );
};
