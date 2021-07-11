import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ImageReducer from '../reducers/ImageReducer';
import PageReducer from '../reducers/PageReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
const configureStore = () => {
    const rootReducer = combineReducers({
        images: ImageReducer,
        nextPage: PageReducer,
    });
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    sagaMiddleware.run(rootSaga);
    store.dispatch({ type: 'HELLO_GUYS' });
    return store;
};

export default configureStore;
