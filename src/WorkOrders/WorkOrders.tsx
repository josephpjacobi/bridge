import { getAllWorkOrdersByMarinaId } from '../api/workOrders';
import { WorkOrderList } from './WorkOrderList';

export interface WorkOrdersProps {
  marinaId: number;
}

export const WorkOrders = ({ marinaId }: WorkOrdersProps) => {
  const data = getAllWorkOrdersByMarinaId(marinaId);
  return <WorkOrderList rowData={data} />;
};
