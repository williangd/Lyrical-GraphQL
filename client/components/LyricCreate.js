import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.id
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          onChange={(event) => this.setState({ content: event.target.value })}
          value={this.state.content}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyric($songId: ID, $content: String) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
        id
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
