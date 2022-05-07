export interface IDish {
  id: number;
  name: string;
  preparation_time: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}

export interface IReturn {
  data?: Partial<Omit<IDish, 'id'>>;
  message: string;
  failed: boolean;
}

// Toast Context types
export enum ToastActions {
  SET_MESSAGE = 'SET_MESSAGE',
  DELETE_MESSAGE = 'DELETE_MESSAGE',
}

export type TMessage = 'success' | 'error';

export interface IState {
  isShown: boolean;
  message: string;
  type: TMessage;
}

export type AllActions =
  | IPayload<ToastActions.SET_MESSAGE, Omit<IState, 'isShown'>>
  | IWithoutPayload<ToastActions.DELETE_MESSAGE>;

export interface IPayload<E, P> {
  type: E;
  payload: P;
}

export interface IWithoutPayload<E> {
  type: E;
}
