import React, { Component, Fragment } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import AlbumDetail from './AlbumDetail';
import { doFetchAlbums } from '../actions';

class AlbumList extends Component {
  state = {
    albumsList: []
  }

  componentDidMount() {
    this.props.doFetchAlbums();
  }

  renderAlbums() {
    const { albums } = this.props;
    if (!albums) return <Fragment><Text>Loading ...</Text></Fragment>;

    return albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {  
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

function mapStateToProps({ albums }) {
  return {
    albums
  };
}

export default connect(mapStateToProps, { doFetchAlbums })(AlbumList);
