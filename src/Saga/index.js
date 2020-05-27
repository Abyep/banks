import { put, call, takeLatest, take } from "redux-saga/effects";
import api from "../Api/index.js";

export const GET_BANKS = "GET_BANKS";
export const SAVE_BANKS = "SAVE_BANKS";

export const getBanks = (payload) => ({
  type: "GET_BANKS",
  payload,
});



export default function* rootSaga() {
  yield takeLatest("GET_BANKS", handleGetJobs);
}

function* handleGetJobs(action) {
  try {
    const banks = yield call(api.getBanks, action.payload);
    yield put({
      type: "SAVE_BANKS",
      banks,
    });
  } catch (error) {
    yield put({
      type: "SAVE_BANKS",
      error,
    });
  }
}

