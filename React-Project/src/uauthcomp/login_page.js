import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const LoginP = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect( () => { 
      userRef.current.focus();
  }, [])
  useEffect( () => {
    setErrMsg('');
  }, [email, password])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log('Proceed');
      axios.get("http://localhost:8000/profile"+email).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
      }).catch((err)=>{
        toast.error('Login Failed due to : '+err.message)
      })
    }
    }
    const validate = () =>{
        let result = true;
        if(email ==='' || email === null){
            result=false;
            toast.warning('Please Enter User ID')
        }
        if (password ==='' || password ===null) {
          result=false;
          toast.warning('Please Enter Password');
          
        }
        return result;
    

}

  return (
    <MDBCard>
      <MDBCardBody>
        <form>
          <MDBInput
            className='mb-4'
            type='email'
            label='Email ID'
            ref={userRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MDBInput
            className='mb-4'
            type='password'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <MDBBtn type='submit' className='mb-4' block onClick={handleSubmit}>
            Login
          </MDBBtn>

          <div className='text-center'>
            <p>
              New user?{' '}
              <a href='#!' onClick={() => navigate('/register')}>
                Sign Up
              </a>
            </p>
            <p>or log in with:</p>

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
        </form>
      </MDBCardBody>
    </MDBCard>
  );
  
  };

export default LoginP;
