import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscribe, setSubscribe] = useState(true);

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Assuming your JSON server is running on http://localhost:8000
    const response = await fetch('http://localhost:8000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password, subscribe }),
    });

    if (response.ok) {
      console.log('User registered successfully!');
      // You can redirect to the login page or perform other actions after successful registration
    } else {
      console.error('Registration failed.');
    }
  };

  return (
    <MDBCard>
      <MDBCardBody>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput
              id='form3Example1'
              label='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id='form3Example2'
              label='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className='mb-4'
          type='email'
          id='form3Example3'
          label='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          className='mb-4'
          type='password'
          id='form3Example4'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <MDBCheckbox
          wrapperClass='d-flex justify-content-center mb-4'
          id='form3Example5'
          label='Subscribe to our newsletter'
          checked={subscribe}
          onChange={() => setSubscribe(!subscribe)}
        />

        <MDBBtn type='submit' className='mb-4' block onClick={handleRegistration}>
          Sign Up
        </MDBBtn>

        <div className='text-center'>
          <p>
            Existing member?{' '}
            <a href='#!' onClick={()=>{navigate('/login')}}>
              Login
            </a>
          </p>
          <p>or sign up with:</p>

          <MDBBtn floating color='secondary' className='mx-1'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating color='secondary' className='mx-1'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn floating color='secondary' className='mx-1'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating color='secondary' className='mx-1'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default RegistrationForm;
