import { Action } from "@ngrx/store";
import { ActionWithPayload } from "../action/ActionWithPayload";

export const OPEN_MEMBER_PROFILE_MODAL = 'OPEN_MEMBER_PROFILE_MODAL';
export const OPEN_MEMBER_PROFILE_MODAL_SUCCESS = 'OPEN_MEMBER_PROFILE_MODAL_SUCCESS';
export const CLOSE_MEMBER_PROFILE_MODAL = 'CLOSE_MEMBER_PROFILE_MODAL';
export const CLOSE_MEMBER_PROFILE_MODAL_SUCCESS = 'CLOSE_MEMBER_PROFILE_MODAL_SUCCESS';

export const OPEN_MEMBER_PROFILE_EDIT_MODAL = 'OPEN_MEMBER_PROFILE_EDIT_MODAL';
export const OPEN_MEMBER_PROFILE_EDIT_MODAL_SUCCESS = 'OPEN_MEMBER_PROFILE_EDIT_MODAL_SUCCESS';
export const CLOSE_MEMBER_PROFILE_EDIT_MODAL = 'CLOSE_MEMBER_PROFILE_EDIT_MODAL';
export const CLOSE_MEMBER_PROFILE_EDIT_MODAL_SUCCESS = 'CLOSE_MEMBER_PROFILE_EDIT_MODAL_SUCCESS';

const STATE = {
};
export function ModalReducer(state = STATE, action: ActionWithPayload<any>) {
  switch (action.type) {
    case OPEN_MEMBER_PROFILE_MODAL:
      return {
        ...state,
      };
    case OPEN_MEMBER_PROFILE_MODAL_SUCCESS:
      return {
        ...state,
      };
    case CLOSE_MEMBER_PROFILE_MODAL:
      return {
        ...state,
      };
    case CLOSE_MEMBER_PROFILE_MODAL_SUCCESS:
      return {
        ...state,
      };
    case OPEN_MEMBER_PROFILE_EDIT_MODAL:
      return {
        ...state,
      };
    case OPEN_MEMBER_PROFILE_EDIT_MODAL_SUCCESS:
      return {
        ...state,
      };
    case CLOSE_MEMBER_PROFILE_EDIT_MODAL:
      return {
        ...state,
      };
    case CLOSE_MEMBER_PROFILE_EDIT_MODAL_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}