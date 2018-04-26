// Import libraries to help creating a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './components/header';

// Create a Component
const App = () => {
  return (
    <Header title='Albums' />
  );
};

// Render it to device
AppRegistry.registerComponent('albums', () => App);
