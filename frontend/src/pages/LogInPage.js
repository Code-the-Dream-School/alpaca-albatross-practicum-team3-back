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
        <form id="formBkgd" action='' onSubmit={submitLogIn} className='login-form'>
          <h1>
            <FaUserCircle />
          </h1>
          <div className="inputFields">
          <label>
            Username: <br></br>
            <input type='text' name='username' placeholder='username' />
          </label>
          <label>
            Password:<br></br>
            <input type={passwordShown ? "text" : "password"} name='password' placeholder='password' />
            {/* <button id='eye' onClick={togglePassword}>
              {passwordShown ? <FaEyeSlash /> : <FaEye />} */}
          {/* </button> */}
          </label>

          <button className="logbtn" type='submit'>Login</button>
            
            {logInError ? (
                <p className='login-error'>
                  <small>Invalid Password or Username</small>
                </p>) : null
            }
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
