import React, { useState } from 'react';


const LogInPage = () => {
    const[userName,setUserName]=useState(""); 
    const [password, setPassword] = useState("");
    const [dataInput, setDataInput] = useState(""); 
    
    const submitLogIn = () => {
        const userInfo = { userName: userName, password: password };
        setDataInput([userInfo]);
    }
    

    return(
        <>
            <form className='login' action="" onSubmit={submitLogIn}> 
                <div className='username'> 
                    <label htmlFor="user name">User Name</label>
                    <input type="text" name="user name" id="user name" value={userName} onChange={(e)=>setUserName(e.target.value)}/> 
                </div> 
                <div className='password'> 
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                </div>  
                <button className='loginBtn' type="submit">Login</button>
            </form>
        </>
    )
}

export default LogInPage;
