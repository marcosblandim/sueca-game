import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import getSuits from '../utils/getSuits';

export default function RuleEditor({ rules, updateRule }) {
  const findRule = name => {
    for (const rule of rules) {
      if (rule.name == name) {
        return { ...rule };
      }
    }
  };

  const { name: ruleName } = useParams();

  const [editorRule, setEitorRule] = useState(findRule(ruleName));
  const [redirectToRules, setRedirectToRules] = useState(false);

  if (editorRule == undefined) {
    return <Redirect to='/' />;
  }
  if (redirectToRules) {
    return <Redirect to='/rules' />;
  }

  const handleInputChange = event => {
    const target = event.target;
    const newEditorRule = { ...editorRule };

    const [suit, field] = target.id.split('-');
    newEditorRule.content[suit][field] = target.value;
    setEitorRule(newEditorRule);
  };

  const handleAddition = event => {
    event.preventDefault();

    const confirmMessage = 'save changes?';
    if (!confirm(confirmMessage)) {
      return;
    }

    setRedirectToRules(true);
  };

  return (
    <div>
      <h1>Rule editor</h1>
      <p>
        <Link to='/rules'>{'<'} Back</Link>
      </p>
      <h3>You're editing rule named: {editorRule.name}</h3>
      <form onSubmit={handleAddition}>
        {getSuits().map(suit => (
          <div key={suit}>
            Nome:
            <input
              id={suit + '-name'}
              value={editorRule.content[suit].name}
              onChange={handleInputChange}
              placeholder={'Nome da regra do ' + suit}
            />
            Descrição:
            <input
              id={suit + '-description'}
              value={editorRule.content[suit].description}
              onChange={handleInputChange}
              placeholder={'Descrição da regra do ' + suit}
            />
          </div>
        ))}
        <br />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
