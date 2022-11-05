const LogOutButton = ({onClicked, children}) => (
  <>
    <button type='button' onClick={(e) => onClicked()}>
      {children}
    </button>
  </>
);

export default LogOutButton;
