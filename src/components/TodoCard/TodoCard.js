import React, { useRef } from "react";
import { Pressable, View, Text } from 'react-native';
import styles from './TodoCard.style'




const TodoCard = ({ item, onCheckedTodo, onDeleteTodo }) => {

    const button = useRef()

    const checkedTodo = () => onCheckedTodo(item.id);
    const deleteTodo = () => onDeleteTodo(item.id);


    return (

        <Pressable ref={button} onPress={checkedTodo} onLongPress={deleteTodo} >
            <View style={item.isOk ? styles.c_checked : styles.container}>
                <Text style={item.isOk ? styles.t_checked : styles.text}>{item.title}</Text>
            </View>
        </Pressable >
    )

}


export default TodoCard