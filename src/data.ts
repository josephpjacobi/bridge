import {
  Contract,
  ContractItem,
  ContractItemType,
} from './Contracts/types';
import { Customer, MarinaCustomer } from './Customers/types';
import { Invoice, LineItems, LineItemType } from './Invoices/types';
import { MarinaGroup } from './MarinaGroup/types';
import { MarinaInventory } from './MarinaInventory/types';
import { Marina } from './Marinas/types';
import { Vessel } from './Vessels/types';
import {
  WorkOrder,
  WorkOrderItems,
  WorkOrderItemType,
} from './WorkOrders/types';

export const marinaGroups: MarinaGroup[] = [
  {
    id: 1,
    name: 'Bridge Marina Group',
    address: '40 Ludlam Ave',
    city: 'Bayville',
    state: 'NY',
    zipCode: 11709,
    updatedAt: '',
    createdAt: '',
  },
];

export const marinas: Marina[] = [
  {
    id: 1,
    marinaGroupId: 1,
    name: 'Bridge',
    address: '40 Ludlam Ave',
    city: 'Bayville',
    state: 'NY',
    zipCode: 11709,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 2,
    name: 'OBMC',
    address: '5 Bay Ave',
    city: 'Oyster Bay',
    state: 'NY',
    zipCode: 11771,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 3,
    name: 'Sagamore',
    address: '7 Bay Ave',
    city: 'Oyster Bay',
    state: 'NY',
    zipCode: 11771,
    updatedAt: '',
    createdAt: '',
  },
];

export const marinaCustomers: MarinaCustomer[] = [
  {
    id: 1,
    marinaId: 1,
    marinaCustomerId: 1,
    inventoryId: 1,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 2,
    marinaId: 1,
    marinaCustomerId: 2,
    inventoryId: 2,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 3,
    marinaId: 1,
    marinaCustomerId: 3,
    inventoryId: 3,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 4,
    marinaId: 1,
    marinaCustomerId: 4,
    inventoryId: 4,
    updatedAt: '',
    createdAt: '',
  },
];

export const marinaInventory: MarinaInventory[] = [
  {
    id: 1,
    marinaId: 1,
    marinaCustomerId: 1,
    vesselId: 1,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 2,
    marinaId: 1,
    marinaCustomerId: 2,
    vesselId: 2,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 3,
    marinaId: 1,
    marinaCustomerId: 3,
    vesselId: 3,
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 4,
    marinaId: 1,
    marinaCustomerId: 4,
    vesselId: 4,
    updatedAt: '',
    createdAt: '',
  },
];

export const customers: Customer[] = [
  {
    id: 1,
    firstName: 'Joe',
    lastName: 'Jacobi',
    address: '20 Pine Lane',
    city: 'Bayville',
    state: 'NY',
    zipCode: '11709',
    email: 'joe@buoy.com',
    phone: '5163184957',
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 2,
    firstName: 'Julia',
    lastName: 'Riva',
    address: '20 Pine Lane',
    city: 'Bayville',
    state: 'NY',
    zipCode: '11709',
    email: 'julia@buoy.com',
    phone: '5163059977',
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 3,
    firstName: 'Derek',
    lastName: 'Jacobi',
    address: 'address1',
    city: 'Northport',
    state: 'NY',
    zipCode: '12345',
    email: 'derek@buoy.com',
    phone: '5168573729',
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 4,
    firstName: 'Gab',
    lastName: 'Femia',
    address: 'address1',
    city: 'Northport',
    state: 'NY',
    zipCode: '12345',
    email: 'gab@buoy.com',
    phone: '5165556789',
    updatedAt: '',
    createdAt: '',
  },
];

export const vessels: Vessel[] = [
  {
    id: 1,
    year: 2024,
    boatName: 'Boaty',
    length: 34,
    make: 'EdgeWater',
    model: '340CC',
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 2,
    year: 2023,
    boatName: 'The Boat',
    length: 24,
    make: 'Grady White',
    model: 'Canyon',
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 3,
    year: 2022,
    boatName: 'Ol Reliable',
    length: 17,
    make: 'Boston Whaler',
    model: 'Montauk',
    updatedAt: '',
    createdAt: '',
  },
  {
    id: 4,
    year: 2005,
    boatName: 'Bassman',
    length: 24,
    make: 'Boston Whaler',
    model: 'Outrage',
    updatedAt: '',
    createdAt: '',
  },
];

export const contracts: Contract[] = [
  {
    id: 1,
    status: 'complete',
    marinaId: 1,
    marinaCustomerId: 1,
    inventoryId: 1,
    deliveryMethod: 'email',
    updatedAt: '',
    createdAt: '',
  },
];

export const contractItems: ContractItem[] = [
  {
    id: 1,
    contractId: 1,
    itemTypeId: 1,
    updatedAt: '',
    createdAt: '',
  },
];

export const contractItemType: ContractItemType[] = [
  {
    id: 1,
    title: 'Bottom Paint - contract item', // here for testing
    marinaId: 1,
    description:
      'Paint the bottom of your boat before it goes into the water.',
    updatedAt: '',
    createdAt: '',
  },
];

export const workOrders: WorkOrder[] = [
  {
    id: 1,
    status: 'Complete',
    marinaId: 1,
    marinaCustomerId: 1,
    inventoryId: 1,
    contractId: 1,
    updatedAt: '',
    createdAt: '',
  },
];

export const workOrderItems: WorkOrderItems[] = [
  {
    id: 1,
    workOrderId: 1,
    workItemTypeId: 1,
    status: 'Complete',
    updatedAt: '',
    createdAt: '',
  },
];

export const workItemType: WorkOrderItemType[] = [
  {
    id: 1,
    marinaId: 1,
    title: 'Bottom Paint - work item', // here for testing
    description: 'Painted the bottom of the boat',
    updatedAt: '',
    createdAt: '',
  },
];

export const invoices: Invoice[] = [
  {
    id: 1,
    status: 'Not paid',
    marinaId: 1,
    workOrderId: 1,
    inventoryId: 1,
    marinaCustomerId: 1,
    dateSent: '1/1/25',
    dateDue: '6/1/25',
    updatedAt: '',
    createdAt: '',
  },
];

export const lineItems: LineItems[] = [
  {
    id: 1,
    invoiceId: 1,
    itemType: 1,
    price: 100,
    hours: 1,
    updatedAt: '',
    createdAt: '',
  },
];

export const lineItemType: LineItemType[] = [
  {
    id: 1,
    title: 'Bottom Paint - line item', // here for testing
    description: 'Paint the bottom of the boat',
  },
];
