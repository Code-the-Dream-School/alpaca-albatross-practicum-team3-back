import { useState, useEffect } from 'react';
import { register } from '../components/API/Auth';
import { FaUserCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ToDoAPI from '../components/API/ToDoAPI';
import { ValidationPassword } from '../middleware/ValidationPassword';
//import SharedReducer from 'shared-reducer-hooks';
import { useCookies } from 'react-cookie';

function Registration() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  // const initialState = {
  //   logged: false,
  //   listID: '',
  // }
  //const [defaultListID, setDefaultListID] = useState('');
  const [cookies, setCookie] = useCookies(['listID']);

  //   const [token, setToken] = useState('');
  //   //this sets fresh token when it's changed
  //   useEffect(() => {
  //     const key = JSON.parse(localStorage.getItem('token'));
  //     if (key) {
  //       setToken(key);
  //     }
  //   }, [token]);

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName === '' || password === '') {
      setError('Must have username and password');
    } else if (ValidationPassword(password) === -1) {
      setError(
        'Password must have at least one lowercase character, one uppercase character, one digit and one special character (!@$%&?).'
      );
    } else if (userName.length < 6 || userName.length > 18) {
      setError('Username must be between 6-18 characters');
    } else {
      let result = await register({ username: userName, password: password });
      console.log(result);

      if (result) {
        //if registered successfully - get listID
        //use token stored in the local storage as a bearerKey
        const token = JSON.parse(localStorage.getItem('token'));
        let id = await ToDoAPI.createNewList(/*apiURL,*/ token);
        //console.log('id', id);
        setCookie('listID', id, { path: '/' });
        // setDefaultListID(id);
        const testID = cookies.listID;
        console.log(testID, 'testID');
        //console.log('from here ID', defaultListID);
        //const [mapState, dispatch] = SharedReducer((state = initialState, action) => {})
        setSubmitted(true);
        setError(false);
        navigate('/home');
      }
    }
  };

  const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <h1>{userName} has successfully registered!</h1>
      </div>
    );
  };

  return (
    <>
      <div className='auth-form-container'>
        <form className='register-form'>
          <h1 className='regAvatar'>
            <FaUserCircle />
          </h1>

          <div>
            <label htmlFor='user name'>Create username</label>
            <input
              placeholder='create username'
              onChange={handleUserName}
              value={userName}
              type='text'
            />
          </div>

          <div>
            <label htmlFor='password'>Create password</label>
            <input
              placeholder='create password'
              onChange={handlePassword}
              value={password}
              type={passwordShown ? 'text' : 'password'}
            />
          </div>

          <button className='register-btn' onClick={handleSubmit} type='submit'>
            Register
          </button>
          <div>{successMessage()}</div>
          <div>
            {error.length ? (
              <p className='err'>
                <small>{error}</small>
              </p>
            ) : null}
          </div>
        </form>
        <button id='eye2' onClick={togglePassword}>
          {passwordShown ? <FaEyeSlash /> : <FaEye />}
        </button>

        {/* <div>{error.length ? <p className="err"><small>{error}</small></p> : null}</div> */}
      </div>
    </>
  );
}

export default Registration;
