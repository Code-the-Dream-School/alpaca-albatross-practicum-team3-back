import {useState} from "react";
import InputWithLabel from "../form/InputWithLabel";
import SubmitButton from "../form/SubmitButton";

const SignupForm = ({onSignUp, onSetMessage}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !password) {
      onSetMessage("Please provide username and password.");
    } else if (password !== password1) {
      onSetMessage("The passwords do not match. Please try again");
    } else {
      onSignUp(username, password);
      setUsername("");
      setPassword("");
      setPassword1("");
    }
  };

  return (
    <>
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <InputWithLabel
          isFocused
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onSetValue={setUsername}>
          &#128100;
        </InputWithLabel>
        <InputWithLabel
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onSetValue={setPassword}>
          &#128274;
        </InputWithLabel>
        <InputWithLabel
          type='password'
          name='password1'
          placeholder='Conform password'
          value={password1}
          onSetValue={setPassword1}>
          &#128274;
        </InputWithLabel>
        <SubmitButton>Sign up</SubmitButton>
      </form>
    </>
  );
};

export default SignupForm;
