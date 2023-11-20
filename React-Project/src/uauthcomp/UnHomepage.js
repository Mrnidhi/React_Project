import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../navigation/NavBar';
import { useNavigate } from 'react-router-dom';

const UnHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
      <h2>Welcome to the Homepage</h2>
      <MDBBtn onClick={()=>{navigate('/login')}} color="primary">
        Login
      </MDBBtn>
      <MDBBtn onClick={()=>{navigate('/register')}} color="success">
        Register
      </MDBBtn>
    </div>
  );
};

export default UnHomePage;
