import { useState } from 'react';
import { register } from "../components/API/Auth";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate} from 'react-router-dom';

function Registration() {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const navigate = useNavigate();


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
	setError(true);
	} else {
		let result = await register({username: userName, pw: password});
		console.log(result)
	setSubmitted(true);
	setError(false);
	navigate("/home")
	}
};
// onSubmit: async (values) => {
// 	let result = await login(values);
// 	if (result.success) {
// 		navigate('../dashboard')
// 	} else {
// 		let errors = []
// 		errors.push(result.errors)
// 		setFormErrors(errors);
// 	}
// }


const successMessage = () => {
	return (
	<div
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>{userName} has successfully registered!</h1>
	</div>
	);
};


const errorMessage = () => {
	return (
	<div
		style={{
		display: error ? '' : 'none',
		}}>
		<h1 className='err'>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className='auth-form-container'>

	<form className='register-form'>
		<h1><FaUserCircle/></h1>

		<div>
		    <label htmlFor="user name"></label>
		    <input placeholder='create username' onChange={handleUserName}
		    value={userName} type="text" />
        </div>

        <div>  
		    <label htmlFor="password"></label>
		    <input placeholder='create password' onChange={handlePassword} value={password} type="password" />
        </div>
            
		<button className='register-btn' onClick={handleSubmit} type="submit">
		Register
		</button>
	<div>
		{errorMessage()}
		{successMessage()}
	</div>
	</form>
	</div>
);
}

export default Registration;
