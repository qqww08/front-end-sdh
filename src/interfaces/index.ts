import { Store } from "redux";
import { Task } from "redux-saga";

export interface WithSagaTaskStore extends Store {
  sagaTask?: Task;
}

// TODO add state interface
export interface State {}
