import {
    IMAGES_LOAD,
    IMAGES_LOAD_FAILURE,
    IMAGES_LOAD_SUCCESS,
} from '../constants/ActionTypes';

export const loadImages = () => {
    return {
        type: IMAGES_LOAD,
    };
};

export const setImages = images => {
    return {
        type: IMAGES_LOAD_SUCCESS,
        // payload:images
        images,
    };
};

export const setError = error => {
    return {
        type: IMAGES_LOAD_FAILURE,
        //payload:error
        error,
    };
};
