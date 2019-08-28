import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';


import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNotes from './components/CreateNotes'
import CreateUsers from './components/CreateUsers'

function App() {
  return (
    <Router>
      <Navigation/>
      
      <div className="container p-4">
        <Route path="/" exact component={NotesList}/>
        <Route path="/edit/:id" component={CreateNotes}/>
        <Route path="/create" component={CreateNotes}/>
        <Route path="/user" component={CreateUsers}/>
      </div>

    </Router>
  );
}

export default App;
