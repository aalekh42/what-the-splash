import {
    IMAGES_LOAD,
    IMAGES_LOAD_FAILURE,
    IMAGES_LOAD_SUCCESS,
} from '../constants/ActionTypes';

const InitialState = {
    loading: false,
    images: [],
    error: '',
};
const ImageReducer = (state = InitialState, action) => {
    // if (action.type == IMAGES_LOAD_SUCCESS) {
    //     return [...state, ...action.images];
    // }
    // return state;
    switch (action.type) {
        case IMAGES_LOAD:
            return {
                ...state,
                loading: true,
            };
        case IMAGES_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                ...action.images,
            };
        case IMAGES_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                ...action.error,
            };
        default:
            return state;
    }
};

export default ImageReducer;
