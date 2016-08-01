import * as Actions from '../actions/EntryActions';

export default function Entries(
  state = {
    entries: []
  },
  action
) {
  switch(action.type) {
    case Actions.TEST_ACTION:
    return Object.assign({}, state, {myTestVar:"hello there"});

    default:
    return state
  }
}
