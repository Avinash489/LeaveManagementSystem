import React, {useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import contact from './pages/Contact';
import Login from './pages/login';
import './App.css';

function App() {
  // const [login, setContacts] = useState([]);
  // const addLoginHandler = (login) => {
  //   console.log("login", login);
  //   setContacts();
  // };
  return (
    <div className="ui container">
      <Login />
      {/* <AddContact addContactHandler={addContactHandler} />
      <Contactlist contacts={contacts} /> */}
    </div>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={login} />
    //     <Route path="/contact" component={contact} />
    //   </Routes>
    // </Router>
  );
}

export default App;
