import { useState } from 'react';
import { Route, Switch } from 'react-router';
import Game from './Game';
import Home from './Home';
import Rules from './Rules';
import getDefaultRuleContent from './Rules/utils/getDefaultRuleContent';

function App() {
  const defaultRuleName = 'standart';

  const [rules, setRules] = useState([
    {
      name: defaultRuleName,
      content: getDefaultRuleContent(),
    },
  ]);
  const [selectedRuleName, setSelectedRuleName] = useState(defaultRuleName);

  const findRule = name => {
    for (const rule of rules) {
      if (rule.name == name) {
        return rule;
      }
    }
  };

  return (
    <div className='App'>
      <Switch>
        <Route path='/game'>
          <Game selectedRule={findRule(selectedRuleName)} />
        </Route>
        <Route path='/rules'>
          <Rules
            rules={rules}
            setRules={setRules}
            selectedRuleName={selectedRuleName}
            setSelectedRuleName={setSelectedRuleName}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
