import { useState } from 'react';
import { login } from '../components/API/Auth';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {FiAlertTriangle} from "react-icons/fi"
import ToDoAPI from '../components/API/ToDoAPI';
import { NavLink } from './Home/NavbarElements';
import { useCookies } from 'react-cookie';
import { authAtom } from '../state/atom-auth';
import { useSetRecoilState } from 'recoil';

const LogInPage = () => {
  const [logInError, setLogInError] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [cookies, setCookie] = useCookies(['listID']);
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authAtom);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const submitLogIn = async (e) => {
    try {
      e.preventDefault();
      let result = await login({
        username: e.target.username.value,
        password: e.target.password.value,
      });
      console.log(result, 'result.....');
      //console.log("Success:", result)
      if (result) {
        setLogInError(false);
        const token = JSON.parse(localStorage.getItem('token'));
        const lists = await ToDoAPI.getListIDs(token);
        const id = lists[0]._id;
        // console.log('lists and id', lists, id);
        setCookie('listID', id, { path: '/' });
        setAuth(localStorage.getItem('user'));
        navigate('/home');
      }
    } catch (error) {
      setLogInError(true);
    }
  };

  return (
    <div>
      <div className='auth-form-container'>
        <form
          id='formBkgd'
          action=''
          onSubmit={submitLogIn}
          className='login-form'
        >
          <div>
            <h1 className='logo'><em>Lifestyle:</em><br></br>
      tracking all of life's tasks
      </h1>
            <NavLink
              to='register'
              id='register'
              style={{ border: 'none', fontSize: '14px' }}
            >
              Create an account
          </NavLink>
          </div>
          <div className='inputFields'>
            <label>
              Username: <br></br>
              <input type='text' name='username' placeholder='username' />
            </label>
            <label>
              Password:<br></br>
              <input
                type={passwordShown ? 'text' : 'password'}
                name='password'
                placeholder='password'
              />
            </label>

            <button className='logbtn' type='submit'>
              Login
            </button>

            {logInError ? (
              <p className='login-error'>
                <small><FiAlertTriangle/>Invalid Password or Username</small>
              </p>
            ) : null}
          </div>
        </form>
        <button id='eye' onClick={togglePassword}>
          {passwordShown ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default LogInPage;
