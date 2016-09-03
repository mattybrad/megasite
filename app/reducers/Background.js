import * as Actions from '../actions/BackgroundActions';

export default function Background(
  state = {
    active: true,
    primaryColor: '#00cc00',
    secondaryColor: '#0000cc'
  },
  action
) {
  switch(action.type) {
    case Actions.TEST_ACTION:
    return Object.assign({}, state, {myTestVar:"hello there"});

    case Actions.SET_ACTIVE:
    return Object.assign({}, state, {
      active: action.isActive
    });

    case Actions.SET_COLORS:
    return Object.assign({}, state, {
      primaryColor: action.primaryColor,
      secondaryColor: action.secondaryColor
    });

    default:
    return state
  }
}
