import { all } from "redux-saga/effects";
import { githubSaga } from "./github/github.saga";

export default function* rootSaga() {
  yield all([githubSaga()]);
}