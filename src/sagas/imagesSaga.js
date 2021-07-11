import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError } from '../Actions/imageActions';
import { IMAGES_LOAD } from '../constants/ActionTypes';
import { fetchImages } from '../api';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES_LOAD, handleImagesLoad);
}
