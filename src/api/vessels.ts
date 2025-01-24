import { marinaInventory, vessels } from '../data';
import { MarinaInventory } from '../MarinaInventory/types';
import { Vessel } from '../Vessels/types';

// Vessel instance

// Using filter instead of find to avoid ts error of possibly being undefined
export const getVesselByVesselId = (
  vesselId: Vessel['id']
): Vessel[] =>
  vessels.filter((vessel: Vessel) => {
    return vessel.id === vesselId;
  });

// Vessel List
export const getVesselsByMarinaCustomerId = (
  marinaId: MarinaInventory['marinaId'],
  marinaCustomerId: MarinaInventory['marinaId']
) => {
  const boats = marinaInventory.filter(
    (inventoryRecord) =>
      inventoryRecord.marinaId === marinaId &&
      inventoryRecord.marinaCustomerId === marinaCustomerId
  );

  return boats.map(({ vesselId }) => {
    return getVesselByVesselId(vesselId)[0];
  });
};
