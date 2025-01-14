import { ChecklistItemProps } from '../OffseasonWorkForm/types';
import './switch.css';

interface SwitchProps
  extends Omit<ChecklistItemProps, 'description'> {}

export const Switch = (props: SwitchProps) => {
  const { id, name, checked, onToggleSwitch } = props;
  return (
    <label className="switch">
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={() => onToggleSwitch(id)}
      />
      <span className="slider round"></span>
    </label>
  );
};
