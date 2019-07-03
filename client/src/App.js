import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/pages/Landing/Landing';
import FormInput from './components/pages/FormInput/FormInput';
import Error from './components/pages/Error/Error';
import Nav from './components/utils/Nav/Nav';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" component={Landing} exact/>
        <Route path="/form_input" component={FormInput}/>
        <Route component={Error} />
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
