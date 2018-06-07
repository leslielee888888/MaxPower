import { Action } from "@ngrx/store";
import { ActionWithPayload } from "../action/ActionWithPayload";

export const SUBMIT_SUCCESS_ALERT = 'SUBMIT_SUCCESS_ALERT';
export const SUBMIT_ERROR_ALERT = 'SUBMIT_ERROR_ALERT';
export const ALERT_COMPLETE = 'ALERT_COMPLETE';


const STATE = {
};
export function SwalReducer(state = STATE, action: ActionWithPayload<any>) {
  switch (action.type) {
    case SUBMIT_SUCCESS_ALERT:
      return {
        ...state,
        type: 'success'
        // data: state.payload
      };
    case SUBMIT_ERROR_ALERT:
      return {
        ...state,
        type: 'error'
        // data: state.payload
      };
    case ALERT_COMPLETE: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}