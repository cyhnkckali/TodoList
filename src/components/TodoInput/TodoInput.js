import React, { useRef, useState } from "react";
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './TodoInput.style'




const TodoInput = (props) => {

    const [todoText, setTodoText] = useState("")
    const todoInput = useRef()

    const onChangeTodoText = value => {
        setTodoText(value)
    }

    const saveTodo = () => {
        props.saveTodo(todoText)
        setTodoText("")
        todoInput.current.blur();
    }

    return (

        <View style={styles.container}>
            <TextInput ref={todoInput} style={styles.input} onChangeText={onChangeTodoText} value={todoText} />
            <TouchableOpacity disabled={todoText === '' ? true : false} onPress={saveTodo}>
                <View style={todoText === '' ? styles.button_disable : styles.button}>
                    <Text style={styles.button_text}>Kaydet</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TodoInput