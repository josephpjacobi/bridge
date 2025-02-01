/*
  Marina Group represents the controlling group that owns numerous marinas.

  This will come in handly when building out a dashboard for Marina group owners where they can see all of their holdings on one page.
**/
export interface MarinaGroup {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  updatedAt: string;
  createdAt: string;
}
