import { useState } from 'react';
import { login } from '../components/API/Auth';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import ToDoAPI from '../components/API/ToDoAPI';

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
          <label>
            Username:
            <input type='text' name='username' placeholder='username' />
          </label>
          <label>
            Password:
            <input type={passwordShown ? "text" : "password"} name='password' placeholder='password' />
            <button className="show.btn" onClick={togglePassword}>
          {passwordShown ? <FaEyeSlash /> : <FaEye />}
          </button>
          </label>
          <button type='submit'>Login</button>
        </form>
            
            {logInError ? (
                <p className='text-red-600 bg-white'>
                  <small>Invalid Password or Username</small>
                </p>) : null
            }
            
      </div>
    </div>
  );
};

export default LogInPage;
