import {useState} from "react";
import InputWithLabel from "../form/InputWithLabel";
import CustomButton from "../form/CustomButton";

const LoginForm = ({onLogin, onSetMessage}) => {
  const [username1, setUsername1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username1 || !password2) {
      return onSetMessage("Please provide username and password.");
    }
    onLogin(username1, password2);
    setUsername1("");
    setPassword2("");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputWithLabel
          type='text'
          name='username1'
          placeholder='Username'
          value={username1}
          onSetValue={setUsername1}>
          &#128100;
        </InputWithLabel>
        <InputWithLabel
          type='password'
          name='password2'
          placeholder='Passowrd'
          value={password2}
          onSetValue={setPassword2}>
          &#128274;
        </InputWithLabel>
        <CustomButton type='submit'>Login</CustomButton>
      </form>
    </>
  );
};

export default LoginForm;
