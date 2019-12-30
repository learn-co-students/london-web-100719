const API_ENDPOINT = "http://localhost:3000/api/v1";
const USERS_URL = `${API_ENDPOINT}/users`;
const LOGIN_URL = `${API_ENDPOINT}/login`;
const VALIDATE_URL = `${API_ENDPOINT}/validate_user`;
const POSTS_URL = `${API_ENDPOINT}/posts`;

const jsonify = res => res.json();

export const login = loginData =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: loginData })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

export const signUp = signupData =>
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: signupData })
  }).then(jsonify);

const validateUser = () => {
  if (localStorage.token) {
    return fetch(VALIDATE_URL, {
      headers: {
        Authorisation: localStorage.token
      }
    })
      .then(jsonify)
      .then(data => {
        localStorage.setItem("token", data.token);
        return data.user;
      });
  } else {
    return Promise.reject({ error: "no token" });
  }
};

const postPost = post =>
  fetch(POSTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({ post })
  }).then(jsonify);

export default {
  login,
  signUp,
  validateUser,
  postPost
};
