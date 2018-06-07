import { Action } from "@ngrx/store";
import { ActionWithPayload } from "../action/ActionWithPayload";

export const EARNINGS_RECEIVE_QUERY = 'EARNINGS_RECEIVE_QUERY';
export const EARNINGS_RECEIVE_SUCCESS = 'EARNINGS_RECEIVE_SUCCESS';
export const EARNINGS_PENDING_QUERY = 'EARNINGS_PENDING_QUERY';
export const EARNINGS_PENDING_SUCCESS = 'EARNINGS_PENDING_SUCCESS';


const STATE = {};
export function EarningsReducer(state = STATE, action: ActionWithPayload<any>) {
  switch (action.type) {
    case EARNINGS_RECEIVE_QUERY:
      return {
        ...state,
        // data: state.payload
      };
    case EARNINGS_RECEIVE_SUCCESS: {
      const fee = (action.payload as any[]).reduce((pre, cur) => {
        return pre + Number(cur.commission)
      }, 0);
      return {
        ...state,
        receive: action.payload,
        receive_commission: fee
      };
    }
    case EARNINGS_PENDING_QUERY:
      return {
        ...state,
        // data: state.payload
      };
    case EARNINGS_PENDING_SUCCESS: {
      const fee = (action.payload as any[]).reduce((pre, cur) => {
        return pre + cur.ReferrerFee
      }, 0);
      return {
        ...state,
        pending: action.payload,
        pedding_commission: fee
      };
    }
    default:
      return state;
  }
}