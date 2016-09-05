import * as Actions from '../actions/MusicActions';

export default function Background(
  state = {
    active: true,
    channels: []
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
      channels: [...action.channels]
    });

    default:
    return state
  }
}
