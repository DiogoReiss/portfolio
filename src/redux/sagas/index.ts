import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios'

function* fetchRepos() {
  const data = yield axios.get(
    'https://api.github.com/users/DiogoReiss/repos'
  ).then( json => {
    return json;
  }).catch( e => {
    console.log(e)
  })
  yield put({type: "LOADED", json: data});
}

function* actionWatcher() {
  yield takeLatest("GET_REPO", fetchRepos);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}