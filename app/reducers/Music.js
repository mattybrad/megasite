import * as Actions from '../actions/MusicActions';

export default function Background(
  state = {
    freq: 110
  },
  action
) {
  switch(action.type) {
    case Actions.TEST_ACTION:
    return Object.assign({}, state, {myTestVar:"hello there"});

    case Actions.SET_AMBIENCE:
    return Object.assign({}, state, {
      freq: action.freq
    });

    default:
    return state
  }
}
