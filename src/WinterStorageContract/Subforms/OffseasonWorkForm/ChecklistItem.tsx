import { Switch } from '../Switch/Switch';
import { ChecklistItemProps } from './types';

export const ChecklistItem = (props: ChecklistItemProps) => {
  const { id, checked, description, name, onToggleSwitch } = props;
  return (
    <div style={{ display: 'flex' }}>
      <Switch
        id={id}
        name={name}
        checked={checked}
        onToggleSwitch={onToggleSwitch}
      />
      {description}
    </div>
  );
};
