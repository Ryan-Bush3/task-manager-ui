import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Tasks from './components/tasks'
import SpecificTask from './components/specificTasks';
import Admin from './components/admin';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <React.Fragment>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/tasks' component={Tasks}></Route>
            <Route path='/specificTasks' component={SpecificTask}></Route>
            <Route path='/admin' component={Admin}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/notFound' component={NotFound}></Route>
            <Redirect from='/' exact to='/tasks' />
            <Redirect to='/notFound' />
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
