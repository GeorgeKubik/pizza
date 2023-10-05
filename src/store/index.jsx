import {
    legacy_createStore as createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import cards from '../reducers/cards';
import images from '../reducers/images';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action,
        });
    }
    return next(action);
};

const store = createStore(
    combineReducers({ cards, images }),
    compose(
        applyMiddleware(ReduxThunk, stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    )
);

export default store;
