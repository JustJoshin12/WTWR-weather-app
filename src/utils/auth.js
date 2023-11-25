import { checkResponse } from "./api";

export const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://api.weathercloset.jumpingcrab.com'
  : 'http://localhost:3001';



export const signin = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
};


export const register = ({email, password, name, avatar, token}) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }, token),
  }).then((response) => {
    checkResponse(response).then((data) => {
      if (data.status === 201) {
        return data;
      } else {
        throw new Error(data.message);
      }
    });
  });
};


export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};