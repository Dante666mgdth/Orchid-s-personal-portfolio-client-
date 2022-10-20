import React,{useEffect} from "react";
import {Routes,Route,Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from 'semantic-ui-react'
import './App.css';
import ContactList from "./components/ContactList";
import AppNavbar from './components/Navbar';
import Dashboard from "./components/Dashboard";
import {toggleFalse} from "./JS/actions/edit";
import Home from "./components/Home";
import Add from "./components/Add";
import PrivateRoute from "./components/PrivateRoute";
import {getAuthUser} from "./JS/actions/action"



function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());

  useEffect(()=>{
    getUser()
  },[])

  return (
    <div>
      <AppNavbar />
      <Link to="/add">
      <Button onClick={()=>dispatch(toggleFalse())} >ADD</Button>
      </Link>
      <Link to="/contact">
      <Button variant="primary"> Go to Contact </Button>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactList />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Add />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
