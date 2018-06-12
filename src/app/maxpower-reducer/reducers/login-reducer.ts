import { Action } from "@ngrx/store";
import { ActionWithPayload } from "../action/ActionWithPayload";
import swal from 'sweetalert2';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_Fail';


const STATE = {};
export function LoginReducer(state = STATE, action: ActionWithPayload<any>) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        // data: state.payload
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case LOGIN_FAIL: {
      if (action.payload.message !== 'Robot' && action.payload.message !== 'f') {
        swal({
          type: "warning",
          title: 'Message',
          text: action.payload.message,
        })
      } else {
        swal({
          type: "warning",
          title: 'Message',
          text: 'Wrong username or password, please retry.',
        })
      }
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}