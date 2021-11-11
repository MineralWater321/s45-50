import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Banner from './components/Banner'
import Highlights from './components/Highlights';
import './App.css';

function App() {
  return (
    <Fragment>
      <AppNavbar />
      <Container>
        <Banner />
        <Highlights />
      </Container>      
    </Fragment>
  );
}

export default App;
