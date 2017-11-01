import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div></div>
    }
    return (
      <div>
        <Link to='/'>Back</Link>
        <h4>{song.title}</h4>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate id={song.id}/>
      </div>
    );
  }
}



export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.params.id } })
})(SongDetail);
