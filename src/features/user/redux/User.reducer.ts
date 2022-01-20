import { UserActionsConstants } from "./User.actions"

interface UserState {
    name: string;
    email: string;
}

const userInitalState: UserState = {
    name: '',
    email: '',
}

export const UserReducer = (state: UserState = userInitalState, action: ReduxAction) => {
    switch(action.type) {
        case UserActionsConstants.SetName:
            return { ...state, name: action.payload };
        
        case UserActionsConstants.SetEmail:
            return { ...state, email: action.payload };
        
        default:
            return state;
    }
}
