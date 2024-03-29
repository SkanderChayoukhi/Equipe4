// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
// import { FlatList } from 'react-native-web';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 },
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.key !== key).map((item) => {
      if (item.key > key) {
        return { ...item, key: item.key - 1 };
      }
      return item;
    }));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo setTodos={setTodos} todos={todos} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem= {({item}) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
    backgroundColor: '#ddd',
    flex: 1
  },
  list:{
    marginTop: 20,
    flex: 1
  }
});
