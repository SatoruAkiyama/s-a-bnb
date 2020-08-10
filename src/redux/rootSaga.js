import { all, call } from "redux-saga/effects";
import mainDataSaga from "./main-data/mainDataSaga";

export default function* rootSaga() {
  yield all([call(mainDataSaga)]);
}
