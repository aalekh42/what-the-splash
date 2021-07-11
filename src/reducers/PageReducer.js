import { IMAGES_LOAD_SUCCESS } from '../constants/ActionTypes';

const PageReducer = (state = 1, action) => {
    // if (action.type == IMAGES_LOAD_SUCCESS) {
    //     return [...state, ...action.images];
    // }
    // return state;
    switch (action.type) {
        case IMAGES_LOAD_SUCCESS:
            return state + 1;

        default:
            return state;
    }
};

export default PageReducer;
