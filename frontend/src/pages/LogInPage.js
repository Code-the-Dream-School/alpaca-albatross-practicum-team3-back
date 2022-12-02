import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from "../components/API/Auth";

export default function LogInPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const history = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			// await signUp(email, password);
			history.push('/');
		} catch {
			setError('Failed to log in');
		}

		setLoading(false);
	}

	return (
		<div>
			<h2>Log In</h2>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<label>
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button disabled={loading} type="submit">
					Log In
				</button>
			</form>
			<p>
				Need an account? <Link to="/signup">Sign Up</Link>
			</p>
		</div>
	);
}

// 					<input
// 						type="password"
// 						value={passwordConfirm}
// 						onChange={(e) => setPasswordConfirm(e.target.value)}
// 					/>
// 				</label>
// 				<button disabled={loading} type="submit">
// 					Sign Up
// 				</button>
// 			</form>
// 			<p>


// 				Already have an account? <Link to="/login">Log In</Link>
// 			</p>
// 		</div>
// 	);
// }

// export default SignUpPage;






