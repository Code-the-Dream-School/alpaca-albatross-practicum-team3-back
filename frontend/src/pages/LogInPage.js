import { useState } from 'react';
import { login } from '../components/API/Auth';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import ToDoAPI from '../components/API/ToDoAPI';
import { NavLink } from './Home/NavbarElements';

const LogInPage = () => {
  const [logInError, setLogInError] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

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
        navigate('/home', {
          state: {
            listID: id,
          },
        });
      }
    } catch (error) {
      setLogInError(true);
    }
  };

  return (
    <div>
      <div className='auth-form-container'>
        <form action='' onSubmit={submitLogIn} className='login-form'>
          <h1>
            <FaUserCircle />
          </h1>
          <NavLink id="register" to="/register" className='register'>Create an account</NavLink>
          <label>
            Username:
            <input type='text' name='username' placeholder='username' />
          </label>
          <label>
            Password:
            <input type={passwordShown ? "text" : "password"} name='password' placeholder='password' />
          </label>
          <button type='submit'>Login</button>
        </form>
            <button onClick={togglePassword}>Show Password</button>
        {logInError ? (
          <p className='text-red-600 bg-white'>
            <small>Invalid Password/Username</small>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default LogInPage;
