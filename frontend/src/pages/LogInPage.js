import { useState } from 'react'
import { login } from '../components/API/Auth'
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


const LogInPage = () => {

	const [logInError, setLogInError] = useState(false);
	const navigate = useNavigate();
	
	const submitLogIn = async (e) => {
		try {
			e.preventDefault()
			let result = await login({username: e.target.username.value, password: e.target.password.value});	
			console.log(result, 'result.....')
			//console.log("Success:", result)
			if ( result ) {
				setLogInError(false)
				navigate('/home')
			}	
		} catch (error) {
				setLogInError(true)
		}			
}



return(
	<div>
	<div className='auth-form-container'>
		<form action="" onSubmit={submitLogIn} className='login-form'> 
		<h1><FaUserCircle/></h1>
		  <label>
        Username:
      <input
        type="text"
        name="username"
				placeholder="username"
      />
      </label>
			<label>
        Password:
      <input
        type="text"
        name="password"
				placeholder="password"
      />
      </label>
      <button type="submit">Login</button>
    </form>		
		{ logInError ? <p className="text-red-600 bg-white"  ><small>Invalid Password/Username</small></p> : null}
	</div> 
		
	</div>
)
}

export default LogInPage;



