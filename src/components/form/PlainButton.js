const PlainButton = ({onClicked, children}) => (
  <>
    <button type='button' onClick={(e) => onClicked()}>
      {children}
    </button>
  </>
);

export default PlainButton;
