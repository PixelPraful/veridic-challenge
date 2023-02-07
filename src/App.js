import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/search/:keyword" exact component={HomeScreen} />
          <Route path="/post/:id" component={ProductScreen} />
          <Redirect to="/" />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
