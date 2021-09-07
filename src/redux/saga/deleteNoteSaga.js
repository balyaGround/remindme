import axios from "axios";
import {
  DELETE_NOTE_BEGIN,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
} from "../const/type";
import { put, takeLatest } from "redux-saga/effects";

function* deleteNote(actions) {
  const { id } = actions;
  const Token = localStorage.getItem("Token");
  yield console.log(Token);
  try {
    const res = yield axios.get(
      `https://remindme.gabatch13.my.id/api/v1/notes/${id}`,
      { headers: { Authorization: `Bearer ${Token}` } }
    );
    yield console.log("delete", res);
    yield put({
      type: DELETE_NOTE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    yield put({
      type: DELETE_NOTE_FAIL,
      payload: error,
    });
  }
}

export function* watchDeleteNote() {
  yield takeLatest(DELETE_NOTE_BEGIN, deleteNote);
}
