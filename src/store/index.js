import { createStore, combineReducers } from 'redux';
import ImageReducer from '../reducers/ImageReducer';

const configureStore = () => {
    const rootReducer = combineReducers({
        xyz: ImageReducer,
    });
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
};

export default configureStore;
