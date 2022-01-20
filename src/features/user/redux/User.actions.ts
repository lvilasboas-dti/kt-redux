export const UserActionsConstants = {
    SetName: 'SET_NAME',
    SetEmail: 'SET_EMAIL',
}

export const UserActions = {
    SetName: (name: string): ReduxAction => ({
        type: UserActionsConstants.SetName,
        payload: name,
    }),

    SetEmail: (email: string): ReduxAction => ({
        type: UserActionsConstants.SetEmail,
        payload: email,
    })
}
