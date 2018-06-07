import { Action } from "@ngrx/store";
import { ActionWithPayload } from "../action/ActionWithPayload";

export const DASHBOARD_QUERY = 'DASHBOARD_QUERY';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';


const STATE = {};
export function DashboardReducer(state = STATE, action: ActionWithPayload<any>) {
  switch (action.type) {
    case DASHBOARD_QUERY:
      return {
        ...state,
        // data: state.payload
      };
    case DASHBOARD_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
}