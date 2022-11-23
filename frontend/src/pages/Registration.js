import { useState } from 'react';

function Registration() {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


const handleUserName = (e) => {
	setUserName(e.target.value);
	setSubmitted(false);
};

const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

const handleSubmit = (e) => {
	e.preventDefault();
	if (userName === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};


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

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Create an Account</h1>
	</div>

	
	<div>
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		<div>
		    <label htmlFor="user name">User Name</label>
		    <input onChange={handleUserName}
		    value={userName} type="text" />
        </div>

        <div>  
		    <label htmlFor="password">Password</label>
		    <input onChange={handlePassword} value={password} type="password" />
        </div>
            
		<button onClick={handleSubmit} type="submit">
		Register
		</button>
	</form>
	</div>
);
}

export default Registration;
