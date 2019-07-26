import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Contacts from './page/contacts';
import Courses from './page/courses';
import Home from './page/home';
import Projects from './page/projects';
import Publictions from './page/publications';
import Team from './page/team';

import Detail from './page/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/contacts" component={Contacts} />
        <Route path="/courses" component={Courses} />
        <Route path="/teams" component={Team} />
        <Route path="/publications" component={Publictions} />
        <Route path="/projects" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
