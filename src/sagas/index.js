import { takeEvery, put } from 'redux-saga/effects';

//worker saga
function* handleImages() {
    console.log('hello from worker saga');
    yield put({ type: 'FETCH_USERS_SUCCESS' });
}
//watcher saga
function* rootSaga() {
    yield takeEvery('HELLO_GUYS', handleImages);
    console.log('Hello world');
}
//watcher saga -> action ->worker saga
export default rootSaga;
