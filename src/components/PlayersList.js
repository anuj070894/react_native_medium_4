import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPlayers } from '../actions';
import ListItem from './ListItem';

class PlayersList extends Component {
  componentWillMount() {
    this.props.fetchPlayers();
  }

  render() {
    console.log(this.props.players);
    return (
      <FlatList
        data={this.props.players}
        renderItem={({ item }) => <ListItem player={item} />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const players = _.map(state.playersList, (val, uid) => {
    return { ...val, uid }; // this will create an object { name, phone, skill, id } and will create an array out of the objects
  });

  return {
    players,
  };
}

export default connect(mapStateToProps, { fetchPlayers })(PlayersList);
