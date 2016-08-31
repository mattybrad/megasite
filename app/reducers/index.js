import { combineReducers } from 'redux';

import Background from './Background';
import Music from './Music';

const rootReducer = combineReducers({
  Background,
  Music
});

export default rootReducer;
