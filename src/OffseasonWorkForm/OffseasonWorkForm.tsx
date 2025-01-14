import React from 'react';
import { OffseasonWorkChecklistProps } from './types';
import { ChecklistItem } from './ChecklistItem';

export const OffseasonWorkForm = (
  props: OffseasonWorkChecklistProps
) => {
  const { checklistItems } = props;

  const [checklistItemsState, setChecklistItemState] = React.useState(
    Object.fromEntries(checklistItems.map((item) => [item.id, false]))
  );

  const updateChecklistItem = (id: string) =>
    setChecklistItemState({
      ...checklistItemsState,
      [id]: !checklistItemsState[id],
    });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {checklistItems.map((item) => {
        return (
          <ChecklistItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            checked={checklistItemsState[item.id]}
            onToggleSwitch={updateChecklistItem}
          />
        );
      })}
    </div>
  );
};
