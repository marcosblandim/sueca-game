import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Game from './Game';
import Home from './Home';
import Rules from './Rules';
import getDefaultRuleContent from './Rules/utils/getDefaultRuleContent';
import RuleEditor from './Rules/RuleEditor';

function App() {
  const namespace = 'sg-';
  const LSRuleKey = 'rules';
  const LSSelectedRuleNameKey = 'selectedRuleName';

  const fetchLSRules = () =>
    JSON.parse(localStorage.getItem(namespace + LSRuleKey));
  const fetchLSSelectedRuleName = () =>
    localStorage.getItem(namespace + LSSelectedRuleNameKey);

  const defaultRuleName = 'standart';
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
    localStorage.setItem(namespace + LSRuleKey, JSON.stringify(rules));
    localStorage.setItem(namespace + LSSelectedRuleNameKey, selectedRuleName);
  });

  const findRule = name => {
    for (const rule of rules) {
      if (rule.name == name) {
        return rule;
      }
    }
  };

  const updateRule = rule => {
    setRules([...rules, rule]);
  };

  return (
    <div className='App'>
      <Switch>
        <Route path='/game'>
          <Game selectedRule={findRule(selectedRuleName)} />
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

export default App;
