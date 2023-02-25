import Home from './Home';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
<>
<Switch>
  <Route exact path="/" component={Home}/>
  <Redirect to="/" />
</Switch>

</>
  );
}

export default App;
