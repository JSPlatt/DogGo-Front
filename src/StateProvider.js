import React, { createContext, useContext, useReducer } from "react";

//preparing data layer
export const StateContext = createContext()

// higher order component; allows the App to be wrapped
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)