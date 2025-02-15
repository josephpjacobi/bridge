import { Customer } from '../Customers/types';
import { marinaInventory, vessels } from '../data';
import { MarinaInventory } from '../MarinaInventory/types';
import { Marina } from '../Marinas/types';
import { Vessel } from '../Vessels/types';

// Vessel instance

// Using filter instead of find to avoid ts error of possibly being undefined
export const getVesselByVesselId = (
  vesselId: Vessel['id']
): Vessel[] =>
  vessels.filter((vessel: Vessel) => {
    return vessel.id === vesselId;
  });

export const getVesselByInventoryId = (
  inventoryId: MarinaInventory['id']
): Vessel[] => {
  const inventoryRecord = marinaInventory.find(
    (inventoryRecord) => inventoryRecord.id === inventoryId
  );

  if (inventoryRecord === undefined) {
    return [];
  }

  return getVesselByVesselId(inventoryRecord.id);
};

// List of Vessels
export const getAllVesselsByMarinaId = (marinaId: number) => {
  const inventoryIds = getAllInventoryIdsByMarinaId(marinaId);

  return vessels.filter((vessel) => inventoryIds.includes(vessel.id));
};

export const getVesselsByMarinaCustomerId = (
  marinaId: MarinaInventory['marinaId'],
  marinaCustomerId: MarinaInventory['marinaId']
) => {
  const boats = marinaInventory.filter(
    // Need a better var name
    (inventoryRecord) =>
      inventoryRecord.marinaId === marinaId &&
      inventoryRecord.marinaCustomerId === marinaCustomerId
  );

  return boats.map(({ vesselId }) => {
    return getVesselByVesselId(vesselId)[0];
  });
};

export const getAllInventoryIdsByMarinaId = (marinaId: number) =>
  marinaInventory
    .filter(
      (inventoryRecord) => inventoryRecord.marinaId === marinaId
    )
    .map((record) => {
      return record.id;
    });

export const getAllInventoryIdsOwnedByCustomer = (
  marinaId: Marina['id'],
  marinaCustomerId: Customer['id']
) =>
  marinaInventory
    .filter(
      (inventoryRecord) =>
        inventoryRecord.marinaId === marinaId &&
        inventoryRecord.marinaCustomerId === marinaCustomerId
    )
    .map((record) => {
      return record.id;
    });
