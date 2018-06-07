import { Action } from "@ngrx/store";
import { ActionWithPayload } from "../action/ActionWithPayload";

export const MEMBER_PROFILE_QUERY = 'MEMBER_PROFILE_QUERY';
export const MEMBER_PROFILE_SUCCESS = 'MEMBER_PROFILE_SUCCESS';
export const MEMBER_PROFILE_SUBMIT = 'MEMBER_PROFILE_SUBMIT';
export const MEMBER_PROFILE_SUBMIT_SUCCESS = 'MEMBER_PROFILE_SUBMIT_SUCCESS';
export const MEMBER_DEALS_QUERY = 'MEMBER_DEALS_QUERY';
export const MEMBER_DEALS_SUCCESS = 'MEMBER_DEALS_SUCCESS';
export const MEMBER_PROFILE_ADD_SUBMIT = 'MEMBER_PROFILE_ADD_SUBMIT';
export const MEMBER_PROFILE_AUTO_SAVE = 'MEMBER_PROFILE_AUTO_SAVE';
export const MEMBER_PROFILE_AUTO_SAVE_SUCCESS = 'MEMBER_PROFILE_AUTO_SAVE_SUCCESS';
export const MEMBER_PROFILE_AUTO_SAVE_FAIL = 'MEMBER_PROFILE_AUTO_SAVE_FAIL';
export const MEMBER_PROFILE_AUTO_SAVE_HIDE = 'MEMBER_PROFILE_AUTO_SAVE_HIDE';
export const MEMBER_PROFILE_AUTO_SAVE_SAVING = 'MEMBER_PROFILE_AUTO_SAVE_SAVING';
export const MEMBER_PROFILE_FORM_RESET = 'MEMBER_PROFILE_FORM_RESET';

const STATE = {
  profile: {},
  deals: {},
  autosave: 'hide'
};
export function MemberProfileReducer(state = STATE, action: ActionWithPayload<any>) {
  switch (action.type) {
    case MEMBER_PROFILE_QUERY:
      return {
        ...state,
        // data: state.payload
      };
    case MEMBER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    case MEMBER_DEALS_QUERY:
      return {
        ...state,
        // data: state.payload
      };
    case MEMBER_DEALS_SUCCESS:
      return {
        ...state,
        deals: action.payload
      };
    case MEMBER_PROFILE_SUBMIT:
      return {
        ...state,
        // data: state.payload
      };
    case MEMBER_PROFILE_ADD_SUBMIT:
      return {
        ...state
        // data: state.payload
      };
    case MEMBER_PROFILE_SUBMIT_SUCCESS:
      return {
        ...state,
        // deals: action.payload
      };
    case MEMBER_PROFILE_AUTO_SAVE:
      return {
        ...state,
        // data: state.payload
      };
      case MEMBER_PROFILE_AUTO_SAVE_SAVING:
      return {
        ...state,
        // data: state.payload
        autosave: 'saving'
      };
    case MEMBER_PROFILE_AUTO_SAVE_SUCCESS:
      return {
        ...state,
        // deals: action.payload
        autosave: 'success'
      };
    case MEMBER_PROFILE_AUTO_SAVE_FAIL:
      return {
        ...state,
        // deals: action.payload
        autosave: 'fail'
      };
      case MEMBER_PROFILE_AUTO_SAVE_HIDE:
      return {
        ...state,
        // deals: action.payload
        autosave: 'hide'
      };
      case MEMBER_PROFILE_FORM_RESET:
      return {
        ...STATE
      };
    default:
      return state;
  }
}