// Import libraries to help creating a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './components/header';

// Create a Component
const App = () => {
  return (
    <Header />
  );
};

// Render it to device
AppRegistry.registerComponent('albums', () => App);
