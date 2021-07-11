import { takeEvery, put } from 'redux-saga/effects';
import { IMAGES_LOAD, IMAGES_LOAD_FAILURE } from '../constants/ActionTypes';

//worker saga
function* handleImages() {
    console.log('fetching images from saga');
}
//watcher saga
function* rootSaga() {
    yield takeEvery(IMAGES_LOAD, handleImages);
    console.log('Hello world');
}
//watcher saga -> action ->worker saga
export default rootSaga;
