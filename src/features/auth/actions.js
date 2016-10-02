import { push } from 'react-router-redux'
import { async } from "redux-api";
import { rest } from '../../common'
import {
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_USER_LOGIN_SUCCESS,
} from './constants';

export function authUserLogin (email, password, redirect = "/") {
  return function (dispatch) {
    async(dispatch,
      (cb) => rest.actions.login({}, {
        body: JSON.stringify({ email, password, redirect })
      }, cb)).then((data) => {
        console.log(data.status);
        localStorage.setItem('token', data.token);
      }
    );
  }
}

export function authUserLogout () {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER_LOGOUT
  }
}
