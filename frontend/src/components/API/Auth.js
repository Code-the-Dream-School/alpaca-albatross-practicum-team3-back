import axios from "axios"

const apiURL = process.env.REACT_APP_BASE_URL;



export const login = async function(formData) {  
  return axios
    .post(apiURL + `/auth/login`,
    { 
      username: formData.username,
      password: formData.password
    }).then(response => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user.username))
        localStorage.setItem("token", JSON.stringify(response.data.token))
      }
      
      return response.data
    });
}
export const register = async function(formData) {  
  console.log('apiUrl......',apiURL )
  return axios
    .post(apiURL + `/auth/register`,
    { 
      username: formData.username,
      password: formData.password
    }).then(response => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user.username))
        localStorage.setItem("token", JSON.stringify(response.data.token))
      }
      
      return response.data
    }).catch(err => console.log('registration error',err));
}

// export const logout = async function() {
//   return axios
//     .post(apiURL + `/auth/logout`)
//     .then(response => {
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       return response.data;
//     });
// }


