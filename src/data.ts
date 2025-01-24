export const marinas = [
  {
    id: 1,
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

export const marinaCustomers = [
  {
    id: 1,
    marinaId: 1,
    ownerId: 1,
    inventoryId: 1,
  },
  {
    id: 1,
    marinaId: 1,
    ownerId: 1,
    inventoryId: 1,
  },
  {
    id: 2,
    marinaId: 1,
    ownerId: 2,
    inventoryId: 2,
  },
  {
    id: 3,
    marinaId: 1,
    ownerId: 3,
    inventoryId: 3,
  },
  {
    id: 4,
    marinaId: 1,
    ownerId: 4,
    inventoryId: 4,
  },
];

export const vessels = [
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

export const owners = [
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

export const contracts = [
  {
    id: 1,
    status: 'complete',
    marinaId: 1,
    inventoryId: 1,
    deliveryMethod: 'email',
    updatedAt: '',
    createdAt: '',
  },
];

export const contractItems = [
  {
    id: 1,
    contractId: 1,
    itemTypeId: 1,
  },
];

export const contractItemType = [
  {
    id: 1,
    title: 'Bottom Paint',
    marinaId: 1,
    description:
      'Paint the bottom of your boat before it goes into the water.',
    updatedAt: '',
    createdAt: '',
  },
];

export const workOrders = [
  {
    id: 1,
    status: 'Complete',
    marinaId: 1,
    inventoryId: 1,
    contractId: 1,
    updatedAt: '',
    createdAt: '',
  },
];

export const workItems = [
  {
    id: 1,
    workOrderId: 1,
    workItemTypeId: 1,
    status: 'Complete',
    updatedAt: '',
    createdAt: '',
  },
];

export const workItemType = [
  {
    id: 1,
    marinaId: 1,
    title: 'Bottom Paint',
    description: 'Painted the bottom of the boat',
    updatedAt: '',
    createdAt: '',
  },
];

export const invoices = [
  {
    id: 1,
    status: 'Not paid',
    workOrderId: 1,
    vesselId: 1,
    marinaCustomerId: 1,
    dateSent: '1/1/25',
    dateDue: '6/1/25',
    updatedAt: '',
    createdAt: '',
  },
];

export const lineItems = [
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

export const lineItemType = [
  {
    id: 1,
    title: 'Bottom Paint',
    description: 'Paint the bottom of the boat',
  },
];
