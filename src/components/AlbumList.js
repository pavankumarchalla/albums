import React, { Component } from 'react'
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        console.log('response',response)
        this.setState({albums: response.data})
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>)
  }

  render() { 
    console.log('render',this.state.albums)

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;