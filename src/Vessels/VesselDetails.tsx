import { List, ListItem } from '@mui/material';
import { Vessel } from './types';
import { getVesselByInventoryId } from '../api/vessels';

interface VesselDetailsProps {
  marinaInventoryId: Vessel['id'];
}

export const VesselDetails = ({
  marinaInventoryId,
}: VesselDetailsProps) => {
  const vesselData = getVesselByInventoryId(marinaInventoryId)[0];
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
