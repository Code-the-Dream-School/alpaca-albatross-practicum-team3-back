import {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({
  isFocused,
  type,
  name,
  value,
  placeholder,
  onSetValue,
  children,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onSetValue(e.target.value)}
      />
    </div>
  );
};

InputWithLabel.propTypes = {
  isFocused: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSetValue: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default InputWithLabel;
