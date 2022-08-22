import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import TodoCard from "./components/TodoCard";
import TodoInput from './components/TodoInput'





let dataTodo = []
const App = () => {

  const [todoList, setTodoList] = useState(dataTodo)
  const [count, setCount] = useState(0)

  const saveTodo = (text) => {
    let todoItem = {
      id: Math.random(),
      title: text.trim(),
      isOk: false
    }
    dataTodo.push(todoItem)
    setTodoList(dataTodo)
    setCount(count + 1)
  }

  const checkedTodo = (id) => {
    dataTodo.map(item => { if (item.id === id) { item.isOk = true; return item } else { return item } })
    setCount(dataTodo.filter(item => item.isOk === false).length)
    setTodoList(dataTodo)
  }

  const deleteTodo = (id) => {
    dataTodo = dataTodo.filter(item => item.id !== id)
    setTodoList(dataTodo)
    setCount(dataTodo.filter(item => item.isOk === false).length)
  }


  const renderTodoItem = ({ item }) => <TodoCard item={item} onCheckedTodo={checkedTodo} onDeleteTodo={deleteTodo} />;
  const keyExtractorTodoItem = (item) => item.id.toString()

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.header_text} >Yapılacaklar</Text>
        <Text style={styles.header_text}>{count}</Text>
      </View>

      <FlatList data={todoList} keyExtractor={keyExtractorTodoItem} renderItem={renderTodoItem} style={styles.list_body} showsHorizontalScrollIndicator={false} />

      <TodoInput saveTodo={saveTodo} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_text: {
    color: '#f4f4f8',
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 20,
  },
  list_body: {
    flex: 1,
  }
})

export default App