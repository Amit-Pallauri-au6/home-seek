import {REGISTER_USER,TOGGLE_AUTH_STATE,LOGIN_USER,LOGOUT_USER} from '../actionTypes/userActionTypes';
import axios from 'axios';

export const registerUser = (user) => async dispatch =>  {
    try {
        //console.log(user)
        dispatch({ type:TOGGLE_AUTH_STATE});
        const headers = {
            'Content-Type': 'application/json'
          }
        const { data } = await axios.post("http://localhost:3000/signup", user, {headers: headers})
        console.log(data);
        dispatch({
            type: REGISTER_USER,
            payload: data
        })   
    } catch (err) {
        console.error(err.message)
        dispatch({ type: REGISTER_USER, payload: null})
    } finally {
        dispatch({ type: TOGGLE_AUTH_STATE})
    }
}

export const loginUser = user => async (dispatch, getState) =>  {
    try {
        //const accessToken = getState().userState.user.data.accessToken
        //console.log(accessToken)
        const headers = {
            'Content-Type': 'application/json',
            //'Authorization': `${accessToken}`
          }
        dispatch({ type: TOGGLE_AUTH_STATE})
        const { data } = await axios.post("http://localhost:3000/signIn", user, {headers: headers});
        console.log(data)
        dispatch({
            type: LOGIN_USER,
            payload: data
        })
    } catch (err) {
        console.error(err.message)
        dispatch({ type: LOGIN_USER, payload: null})
    } finally {
        dispatch({ type: TOGGLE_AUTH_STATE})
    }

}

export const logoutUser = () => {
    return {
      type: LOGOUT_USER
    };
  };
