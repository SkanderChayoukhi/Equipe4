import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';



const TodoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text>{item.key}: {item.text}</Text>
        <MaterialIcons name="delete" size={16} color="coral" />
      </View>  
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'coral',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default TodoItem;