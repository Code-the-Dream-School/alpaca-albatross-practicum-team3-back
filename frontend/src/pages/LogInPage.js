import { useState } from 'react'
import { login } from '../components/API/Auth'
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const LogInPage = () => {

	const[userName,setUserName]=useState(""); 
	const [password, setPassword] = useState("");
	const [dataInput, setDataInput] = useState(""); 
	const navigate = useNavigate();
	
	const submitLogIn = async () => {
			const userInfo = { userName: userName, password: password };
			let result = await login({username: userName, pw: password});		
			setDataInput([userInfo]);
}


return(
	<div className='auth-form-container'>
		<form action="" onSubmit={submitLogIn} className='login-form'> 
		<h1><FaUserCircle/></h1>
			<div>
				<label htmlFor="user name"></label>
				<input type="text" placeholder='user name' name="user name" id='name' value={userName} onChange={(e)=>setUserName(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="password"></label>
				<input type="text" placeholder='*******' name="password" id='name' value={password} onChange={(e)=>setPassword(e.target.value)}/> 
			</div> 
			<div className='login-btn'>
			<button type="submit" onClick={()=>navigate("/home")}>Log In</button>
			</div> 
		</form>
		
	</div>
)
}

export default LogInPage;



