import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TodoComp } from "../../components";
import { useSelector } from "react-redux";
import { color } from "../../constants/color";

export const Completed = () => {
    const [todoList, setTodoList] = useState([]);
    const [currentItem, setCurrentItem] = useState();

    const todoSelector = useSelector(State => State.fetchTodo);

    useEffect(() => {
        console.log("todoSelector complete ", typeof todoSelector.data);
        setTodoList(todoSelector.data)
    }, [todoSelector.loading]);
    const renderItem = (item) => {
        const isoDate = item.createdAt;
        const localDate = new Date(isoDate).toLocaleString();
        return (
            <View>
                {
                    item.completed == true && (
                        <TodoComp
                            title={item.title}
                            description={item.description}
                            id={item._id}
                            createdAt={localDate}
                            bgColor={color.GREEN_200}
                        />
                    )
                }

            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={todoList}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}