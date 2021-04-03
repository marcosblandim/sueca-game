import { useState } from 'react';
import { Route, Switch } from 'react-router';
import Game from './Game';
import Home from './Home';
import Rules from './Rules';
import getDefaultRule from './Rules/getDefaultRule';

function App() {
  const defaultRuleName = 'standart';

  const [rules, setRules] = useState({[defaultRuleName]: getDefaultRule()});
  const [selectedRuleName, setSelectedRuleName] = useState(defaultRuleName);

  return (
    <div className="App">
      <Switch>
        <Route path="/game">
          <Game selectedRule={rules[selectedRuleName]}/>
        </Route>
        <Route path="/rules">
          <Rules rules={rules} setRules={setRules} selectedRuleName={selectedRuleName} setSelectedRuleName={setSelectedRuleName}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
