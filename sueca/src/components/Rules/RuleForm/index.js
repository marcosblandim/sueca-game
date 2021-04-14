import React, { useEffect, useState } from 'react';

import getSuits from '../../../utils/getSuits';
import getDefaultRuleContent from '../../../utils/getDefaultRuleContent';
import getEmptyRuleContent from '../../../utils/getEmptyRuleContent';
import rulePostProcess from '../../../utils/rulePostProcess';

export default function RuleForm({ addRule }) {
  const [ruleName, setRuleName] = useState('');
  const [ruleContent, setRuleContent] = useState(getDefaultRuleContent());
  const [justErased, setJustErased] = useState(false);
  const [justFilled, setJustFilled] = useState(true);

  const handleAddition = event => {
    event.preventDefault();

    const confirmMessage = 'add new rule?';
    if (!confirm(confirmMessage)) {
      return;
    }

    const newRule = {
      name: ruleName,
      content: { ...ruleContent },
    };

    const processedRule = rulePostProcess(newRule);

    const added = addRule(processedRule);
    if (added) {
      setRuleName('');
      fillContent();
    }
  };

  const handleNameInputChange = ({ target }) => {
    const newRuleName = target.value;
    setRuleName(newRuleName);
  };

  const handleContentInputChange = ({ target }) => {
    const newContent = { ...ruleContent };

    const [suit, field] = target.id.split('-');
    newContent[suit][field] = target.value;

    setRuleContent(newContent);

    setJustErased(false);
    setJustFilled(false);
  };

  const eraseInputs = () => {
    const confirmMessage = 'clean the form? it will overwrite the current form';
    if (confirm(confirmMessage)) {
      eraseContent();
    }
  };

  const eraseContent = () => {
    setRuleContent(getEmptyRuleContent());

    setJustErased(true);
    setJustFilled(false);
  };

  const fillInputs = () => {
    const confirmMessage = 'fill the form? it will overwrite the current form';
    if (confirm(confirmMessage)) {
      fillContent();
    }
  };

  const fillContent = () => {
    setRuleContent(getDefaultRuleContent());

    setJustFilled(true);
    setJustErased(false);
  };

  return (
    <div>
      <form onSubmit={handleAddition}>
        <input
          id='name'
          value={ruleName}
          onChange={handleNameInputChange}
          placeholder={'Nome das regras'}
          required
          maxLength='30'
        />
        {getSuits().map(suit => (
          <div key={suit}>
            Nome:
            <input
              id={suit + '-name'}
              value={ruleContent[suit] ? ruleContent[suit].name : ''}
              onChange={handleContentInputChange}
              placeholder={'Nome da regra do ' + suit}
              maxLength='30'
            />
            Descrição:
            <input
              id={suit + '-description'}
              value={ruleContent[suit] ? ruleContent[suit].description : ''}
              onChange={handleContentInputChange}
              placeholder={'Descrição da regra do ' + suit}
              maxLength='50'
            />
          </div>
        ))}
        <button type='button' onClick={eraseInputs} disabled={justErased}>
          Erase all inputs
        </button>
        <button type='button' onClick={fillInputs} disabled={justFilled}>
          Fill with default rules
        </button>
        <button type='submit'>Add rule</button>
      </form>
    </div>
  );
}
