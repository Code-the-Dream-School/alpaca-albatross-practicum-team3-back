import { useState, useEffect } from 'react';
import { register } from '../components/API/Auth';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ToDoAPI from '../components/API/ToDoAPI';
import { ValidationPassword } from '../middleware/ValidationPassword';

function Registration() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [defaultListID, setDefaultListID] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName === '' || password === '') {
      setError('Must have username and password');
    } else if(ValidationPassword(password) === -1){
			setError("Must have at least one lowercase character, one uppercase character, one digit and one special character (!@$%&?).")
		} else if(userName.length < 6 || userName.length > 18){
			setError("Username must be between 6-18 characters")
		} else {
      let result = await register({ username: userName, password: password });
      console.log(result);

      if (result) {
        //if registered successfully - get listID
        //use token stored in the local storage as a bearerKey
        const token = JSON.parse(localStorage.getItem('token'));
        let id = await ToDoAPI.createNewList(/*apiURL,*/ token);
        console.log('id', id);
        setDefaultListID(id);
        //console.log('from here ID', defaultListID);

        setSubmitted(true);
        setError(false);
        navigate('/home', {
          state: {
            listID: id,
          },
        });
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
          <h1>
            <FaUserCircle />
          </h1>

          <div>
            <label htmlFor='user name'></label>
            <input
              placeholder='create username'
              onChange={handleUserName}
              value={userName}
              type='text'
            />
          </div>

          <div>
            <label htmlFor='password'></label>
            <input
              placeholder='create password'
              onChange={handlePassword}
              value={password}
              type='password'
            />
          </div>

          <button className='register-btn' onClick={handleSubmit} type='submit'>
            Register
          </button>
          <div>
            {successMessage()}
          </div>
        </form>
            <div>{error.length ? <p className="text-red-600"><small>{error}</small></p> : null}</div>
      </div>
    </>
  );
}

export default Registration;
