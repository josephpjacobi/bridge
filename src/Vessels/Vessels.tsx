import { getAllVesselsByMarinaId } from '../api/vessels';
import { VesselList } from './VesselList';

export interface VesselsProps {
  marinaId: number;
}

export const Vessels = ({ marinaId }: VesselsProps) => {
  const data = getAllVesselsByMarinaId(marinaId);
  return <VesselList rowData={data} />;
};
