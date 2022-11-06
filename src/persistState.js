import {useState, useEffect, useRef} from "react";

const useSessionPersistentState = (key, initialState) => {
  const isMounted = useRef(false);
  const [value, setValue] = useState(
    JSON.parse(sessionStorage.getItem(key)) || initialState
  );
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
};

export default useSessionPersistentState;
