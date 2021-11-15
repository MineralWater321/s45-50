//import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner'
//import Highlights from './components/Highlights';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseView from './pages/CourseView';
import Register from './pages/Register';
import Login from './pages/Login'
import Logout from './pages/Logout';
import Error from './pages/Error';
import './App.css';
import { UserProvider } from './UserContext';

function App() {

  const[user, setUser] = useState({
    id: null,
    isAdmin: null
  })
  //Function for clearing localStorage on logout
  const unsetUser = () => {
    localStorage.clear();
  }

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])

  return (
      <UserProvider value = {{user, setUser, unsetUser}}>
        <Router>
          <AppNavbar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/:courseId" component={CourseView} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/register" component={Register} />
              <Route component={Error} />
            </Switch>
          </Container>
        </Router>
      </UserProvider>  
  );
}

export default App;
