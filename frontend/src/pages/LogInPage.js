import { useState } from 'react'
import { login } from '../components/API/Auth'
import { useNavigate } from 'react-router-dom';


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
	<>
		<form action="" onSubmit={submitLogIn}> 
			<div> 
				<label htmlFor="user name">User Name</label>
				<input type="text" name="user name" id="user name" value={userName} onChange={(e)=>setUserName(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="password">Password</label>
				<input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
			</div>  
			<button type="submit" onClick={()=>navigate("/home")}>Log In</button>
		</form>
	</>
)
}

export default LogInPage;



