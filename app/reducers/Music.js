import * as Actions from '../actions/MusicActions';

export default function Background(
  state = {
    active: true,
    freq: 110
  },
  action
) {
  switch(action.type) {
    case Actions.SET_MUSIC_ACTIVE:
    return Object.assign({}, state, {
      active: action.isActive
    });

    case Actions.SET_AMBIENCE:
    return Object.assign({}, state, {
      freq: action.freq
    });

    default:
    return state
  }
}
