import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { defaultRuleName } from '../../../utils/constants';

export default function RuleLine({
  rule,
  isSelected,
  setSelectedRuleName,
  deleteRule,
}) {
  const selectedRule = () => {
    setSelectedRuleName(rule.name);
  };

  const onDelete = event => {
    event.stopPropagation();
    const confirmMessage = `Delete rule '${rule.name}?'`;
    if (confirm(confirmMessage)) {
      deleteRule(rule.name);
    }
  };

  let match = useRouteMatch();

  const Buttons = () => {
    return (
      <React.Fragment>
        <button type='button' onClick={onDelete}>
          Delete
        </button>
        <Link
          onClick={e => e.stopPropagation()}
          to={`${match.url}/${rule.name}/edit`}
        >
          Edit
        </Link>
      </React.Fragment>
    );
  };

  return (
    <div onClick={selectedRule}>
      {rule.name}
      {isSelected ? ' - selecionado' : ''}
      {rule.name !== defaultRuleName && <Buttons />}
    </div>
  );
}
