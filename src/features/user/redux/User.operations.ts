import { Dispatch } from "redux";
import { UserActions } from "./User.actions";

export const setName = (name: string) => (dispatch: Dispatch) => {
    dispatch(UserActions.SetName(name));
}

export const setEmail = (email: string) => (dispatch: Dispatch) => {
    dispatch(UserActions.SetEmail(email));
}
