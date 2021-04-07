import React from 'react';
import { Link } from 'react-router-dom';
import RuleLine from './RuleLine';
import RuleContent from './RuleContent';
import RuleForm from './RuleForm';

import findRule from '../../utils/findRule';
import { defaultRuleName } from '../../utils/constants';

export default function Rules({
  rules,
  setRules,
  selectedRuleName,
  setSelectedRuleName,
}) {
  const addRule = rule => {
    if (findRule(rule.name, rules)) {
      alert('Rule name already exists');
      return false;
    }
    setRules([...rules, rule]);
    return true;
  };

  const getSelectedRule = () => {
    return findRule(selectedRuleName, rules);
  };

  const deleteRule = name => {
    if (selectedRuleName === name) {
      setSelectedRuleName(defaultRuleName);
    }
    setRules(
      rules.filter(rule => {
        return rule.name !== name;
      })
    );
  };

  return (
    <React.Fragment>
      <h1>Rules</h1>
      <p>
        <Link to='/'>{'<'} Back</Link>
      </p>

      <br />
      <h3>Add rules</h3>
      <RuleForm addRule={addRule} />

      <br />
      <h3>All rules</h3>
      {rules.map(rule => (
        <RuleLine
          key={rule.name}
          rule={rule}
          isSelected={rule.name === selectedRuleName}
          setSelectedRuleName={setSelectedRuleName}
          deleteRule={deleteRule}
        />
      ))}

      <br />
      <h3>Selected rule</h3>
      {getSelectedRule().name}
      <RuleContent content={getSelectedRule().content} />
    </React.Fragment>
  );
}
