export interface ChecklistItemProps {
  id: string;
  name: string;
  checked: boolean;
  description: string;
  onToggleSwitch: (id: string) => void;
}

export interface OffseasonWorkChecklistProps {
  checklistItems: ChecklistItemConfig[];
}

export interface ChecklistItemConfig {
  id: string;
  name: string;
  description: string;
}
