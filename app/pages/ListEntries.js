import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import * as Actions from '../actions/EntryActions';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => {
      dispatch(Actions.testAction());
    }
  }
}

class ListEntriesComponent extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1 className="title">Testing </h1>
        <NavBar activePage="listentries" />
      </div>
    )
  }
}


const ListEntries = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListEntriesComponent);

export default ListEntries;
