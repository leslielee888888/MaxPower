import { Action } from "@ngrx/store";
import { ActionWithPayload } from "../action/ActionWithPayload";

export const MEMBER_QUERY = 'MEMBER_QUERY';
export const MEMBER_SUCCESS = 'MEMBER_SUCCESS';
export const MEMBER_PENDING_QUERY = 'MEMBER_PENDING_QUERY';
export const MEMBER_PENDING_SUCCESS = 'MEMBER_PENDING_SUCCESS';


const STATE = {};
export function MemberReducer(state = STATE, action: ActionWithPayload<any>) {
  switch (action.type) {
    case MEMBER_QUERY:
      return {
        ...state,
        // data: state.payload
      };
    case MEMBER_SUCCESS: {
      return {
        ...state,
        members: action.payload
      };
    }
    case MEMBER_PENDING_QUERY:
      return {
        ...state,
        // data: state.payload
      };
    case MEMBER_PENDING_SUCCESS: {
      return {
        ...state,
        pendingMembers: action.payload
      };
    }
    default:
      return state;
  }
}