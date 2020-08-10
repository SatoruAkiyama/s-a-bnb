import { all, call, takeLatest, put } from "redux-saga/effects";

import mainDataActionsTypes from "./mainDataActionTypes";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./mainDataActions";
import { getMainData } from "./mainDataUtil";

export function* asyncStart() {
  try {
    const data = yield call(getMainData);
    yield put(fetchCollectionsSuccess(data));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* onStart() {
  yield takeLatest(mainDataActionsTypes.FETCH_COLLECTIONS_START, asyncStart);
}

export default function* mainDataSaga() {
  yield all([call(onStart)]);
}
