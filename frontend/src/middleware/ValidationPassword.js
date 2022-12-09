
export const ValidationPassword = (str) => {
  const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$%&?]).{8,32}$/
  const isValid = str.search(re)
  return isValid;
};


