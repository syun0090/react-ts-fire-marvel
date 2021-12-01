import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//screens
import Index from './screens/Index';
import Create from './screens/Create';
import Detail from './screens/Detail';
import page404 from './screens/page404';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/create/" component={Create} />
          <Route path="/detail/:uid" component={Detail} />
          <Route path="/404" component={page404} />
          <Route component={page404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;