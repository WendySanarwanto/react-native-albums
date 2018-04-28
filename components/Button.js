import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ label }) => {
  return (
    <TouchableOpacity>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
