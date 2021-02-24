import { requestGithub } from "./github.action";
import { call, put, takeEvery } from "redux-saga/effects";
import { getGithub } from "./github.api";

function* getUserInfoSaga(action: any) {
  const { payload } = action;
  if (!payload) return;

  try {
    const githubInfo = yield call(getGithub, payload);
    yield put(requestGithub.success(githubInfo));
  } catch (e) {
    yield put(requestGithub.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(requestGithub.request, getUserInfoSaga);
}

// export function* githubSaga() {
//   yield all([
//     takeEvery(members.REQUEST_MEMBER_SEARCH, requestSearchMember),
//   ])
// }