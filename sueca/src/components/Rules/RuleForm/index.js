import React, { useState } from 'react';
import getSuits from '../utils/getSuits';
import getDefaultRuleContent from '../utils/getDefaultRuleContent';
import getEmptyRuleContent from '../utils/getEmptyRuleContent';

export default function RuleForm({ addRule }) {
  const [rule, setRule] = useState({
    name: '',
    content: getDefaultRuleContent(),
  });

  const handleAddition = event => {
    event.preventDefault();

    const confirmMessage = 'add new rule?';
    if (!confirm(confirmMessage)) {
      return;
    }

    const added = addRule(rule);
    if (added) {
      const newRule = { ...rule };
      newRule.name = '';
      newRule.content = getEmptyRuleContent();
      setRule(newRule);
    }
  };

  const setRuleContent = content => {
    const newRule = { ...rule };
    newRule.content = content;
    setRule(newRule);
  };

  const handleNameInputChange = event => {
    const target = event.target;
    const newRule = { ...rule };

    newRule.name = target.value;
    setRule(newRule);
  };

  const handleContentInputChange = event => {
    const target = event.target;
    const newRule = { ...rule };

    const [suit, field] = target.id.split('-');
    newRule.content[suit][field] = target.value;
    setRule(newRule);
  };

  const eraseInputs = () => {
    const confirmMessage = 'clean the form? it will overwrite the current form';
    if (confirm(confirmMessage)) {
      setRuleContent(getEmptyRuleContent());
    }
  };
  const fillInputs = () => {
    const confirmMessage = 'fill the form? it will overwrite the current form';
    if (confirm(confirmMessage)) {
      setRuleContent(getDefaultRuleContent());
    }
  };

  return (
    <div>
      <form onSubmit={handleAddition}>
        <input
          id='name'
          value={rule.name}
          onChange={handleNameInputChange}
          placeholder={'Nome das regras'}
          required
        />
        {getSuits().map(suit => (
          <div key={suit}>
            Nome:
            <input
              id={suit + '-name'}
              value={rule.content[suit] ? rule.content[suit].name : ''}
              onChange={handleContentInputChange}
              placeholder={'Nome da regra do ' + suit}
            />
            Descrição:
            <input
              id={suit + '-description'}
              value={rule.content[suit] ? rule.content[suit].description : ''}
              onChange={handleContentInputChange}
              placeholder={'Descrição da regra do ' + suit}
            />
          </div>
        ))}
        <button type='button' onClick={eraseInputs}>
          Erase all inputs
        </button>
        <button type='button' onClick={fillInputs}>
          Fill with default rules
        </button>
        <button type='submit'>Add rule</button>
      </form>
    </div>
  );
}

/*
- perguntar antes de executar os botoes de fill, erase e add
- se algum input for salvo vazio, preencher com regras defaults
- extrair find rule pra utils
*/
