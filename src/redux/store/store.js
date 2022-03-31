import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import usernameReducer from '../features/user';
import postReducer from '../features/post';

const reducers = combineReducers({
  username: usernameReducer,
  postData: postReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

// const store = configureStore({
//     reducer: {
//       username: usernameReducer,
//       postData: postReducer,
//     },
// });

export default store;