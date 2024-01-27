
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    height: 80,
    paddingTop: 30,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
