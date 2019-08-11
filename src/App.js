import React from 'react';
import { Route, BrowserRouter, Switch, HashRouter } from 'react-router-dom';
import ScrollToTop from './hooks/useScrollTop';
import Header from './components/header';
import Footer from './components/footer';
import Contacts from './page/contacts';
import Courses from './page/courses';
import Home from './page/home';
import Projects from './page/projects';
import Publictions from './page/publications';
import Team from './page/team';
import Member from './page/member';
import Detail from './page/Detail';
import ErrorPage from './page/errorPage';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <ScrollToTop />
        <Switch>
          <Route path="/contacts" component={Contacts} />
          <Route path="/courses" component={Courses} />
          <Route path="/teams/:name/:uuid" component={Member} />
          <Route path="/teams" component={Team} />
          <Route path="/details/:uuid" component={Detail} />
          <Route path="/publications" component={Publictions} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
    </HashRouter>
  );
}

export default App;
