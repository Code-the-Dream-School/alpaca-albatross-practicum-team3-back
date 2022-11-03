import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const AuthPane = ({onLogin, onSignUp, onSetMessage}) => (
  <div>
    <SignUpForm onSignUp={onSignUp} onSetMessage={onSetMessage} />
    <LoginForm onLogin={onLogin} onSetMessage={onSetMessage} />
  </div>
);

export default AuthPane;
