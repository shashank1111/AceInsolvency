import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import About from './containers/about';
import ClaimsPage from './containers/claimsPage';
import CirpServices from './containers/cirpServices';
import ContactUsPage from './containers/contactPage';
import ScrollToTop from './components/scrollToTop';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Fragment>
          <ScrollToTop>
            <Container
              style={{ padding: '0', maxWidth: '1600px' }}
              maxWidth="xl"
            >
              <Header />
              <Route path="/" component={Body} exact />
              <Route path="/about" component={About} />
              <Route path="/claimFiling" component={ClaimsPage} />
              <Route path="/cirpSupportServices" component={CirpServices} />
              <Route path="/contactUs" component={ContactUsPage} />
              <Footer />
            </Container>
          </ScrollToTop>
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
}
