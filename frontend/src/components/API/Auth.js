import axios from "axios"

const apiURL = 'http://localhost:3001/api/v1';


export const login = async function(formData) {  
  return axios
    .post(apiURL + `/auth/login`,
    { 
      username: formData.username,
      password: formData.pw
    }).then(response => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user.username))
        localStorage.setItem("token", JSON.stringify(response.data.token))
      }
      
      return response.data
    });
}

export const register = async function(formData) {  
  return axios
    .post(apiURL + `/auth/register`,
    { 
      username: formData.username,
      password: formData.pw
    }).then(response => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user.username))
        localStorage.setItem("token", JSON.stringify(response.data.token))
      }
      
      return response.data
    });
}

// export default {register, login}