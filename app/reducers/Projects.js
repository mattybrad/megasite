import * as Actions from '../actions/ProjectActions';

export default function Projects(
  state = {
    projects: [],
    isFetching: false
  },
  action
) {
  switch(action.type) {
    case Actions.REQUEST_FETCH_PROJECTS:
    return Object.assign({}, state, {isFetching: true});

    case Actions.SUCCESS_FETCH_PROJECTS:
    return Object.assign({}, state, {isFetching: false, projects: action.projects});

    case Actions.FAILURE_FETCH_PROJECTS:
    return Object.assign({}, state, {isFetching: false});

    default:
    return state
  }
}
