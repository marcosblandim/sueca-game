import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Game from './Game';
import Home from './Home';
import Rules from './Rules';
import getDefaultRuleContent from './Rules/utils/getDefaultRuleContent';
import RuleEditor from './Rules/RuleEditor';
import { ls, defaultRuleName } from './utils/constants';
import findRule from './utils/findRule';

export default function App() {
  const fetchLSRules = () =>
    JSON.parse(localStorage.getItem(ls.namespace + ls.rulesKey));
  const fetchLSSelectedRuleName = () =>
    localStorage.getItem(ls.namespace + ls.selectedRuleNameKey);

  const defaultRules = [
    {
      name: defaultRuleName,
      content: getDefaultRuleContent(),
    },
  ];

  const [rules, setRules] = useState(fetchLSRules() || defaultRules);
  const [selectedRuleName, setSelectedRuleName] = useState(
    fetchLSSelectedRuleName() || defaultRuleName
  );

  useEffect(() => {
    const LSRules = fetchLSRules();
    const LSSelectedRuleName = fetchLSSelectedRuleName();
    if (LSRules) {
      setRules(LSRules);
    }
    if (LSSelectedRuleName) {
      setSelectedRuleName(LSSelectedRuleName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ls.namespace + ls.rulesKey, JSON.stringify(rules));
    localStorage.setItem(
      ls.namespace + ls.selectedRuleNameKey,
      selectedRuleName
    );
  });

  const updateRule = rule => {
    setRules([...rules, rule]);
  };

  return (
    <div className='App'>
      <Switch>
        <Route path='/game'>
          <Game selectedRule={findRule(selectedRuleName, rules)} />
        </Route>
        <Route path='/rules/:name/edit'>
          <RuleEditor rules={rules} updateRule={updateRule} />
        </Route>
        <Route path='/rules'>
          <Rules
            rules={rules}
            setRules={setRules}
            selectedRuleName={selectedRuleName}
            setSelectedRuleName={setSelectedRuleName}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
}
