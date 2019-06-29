// Import libraries to help creating a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header title='Albums' />
    <AlbumList />    
  </View>
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
