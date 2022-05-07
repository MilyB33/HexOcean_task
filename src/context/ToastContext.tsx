import React, { createContext, useReducer } from 'react';
import { ToastActions, TMessage, IState, AllActions } from '../types';

interface PropTypes {
  children: React.ReactNode;
}

export interface ToastContextType {
  state: IState;
  handleMessage: (message: string, type: TMessage) => void;
}

const toastReducer = (state: IState, action: AllActions): IState => {
  switch (action.type) {
    case ToastActions.SET_MESSAGE: {
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        isShown: true,
      };
    }
    case ToastActions.DELETE_MESSAGE: {
      return {
        ...state,
        message: '',
        type: 'success',
        isShown: false,
      };
    }

    default:
      return { ...state };
  }
};

export const ToastContext = createContext<ToastContextType | null>(
  null
);

const initialState: IState = {
  message: '',
  type: 'success',
  isShown: false,
};

const ToastContextProvider = ({ children }: PropTypes) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const handleMessage = (message: string, type: TMessage) => {
    dispatch({
      type: ToastActions.SET_MESSAGE,
      payload: {
        message,
        type,
      },
    });

    setTimeout(() => {
      dispatch({ type: ToastActions.DELETE_MESSAGE });
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ state, handleMessage }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
