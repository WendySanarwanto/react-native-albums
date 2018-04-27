import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albumsList: []
  }

  async componentDidMount() {
    const albumsList = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json());
    this.setState({ albumsList });
    console.log('[DEBUG] - <AlbumList.componentDidMount> this.state.albumsList: \n', 
                this.state.albumsList);
  }

  renderAlbums() {
    const { albumsList } = this.state;
    return albumsList.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {  
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
