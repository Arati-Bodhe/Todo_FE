import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Style";
import { screenNames } from "../../constants/ScreenName";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoCall } from "../../redux/slices/FetchTodo.Slice";
import { Loader, TodoComp } from "../../components";
import { actuatedNormalize, actuatedNormalizeVertical } from "../../dimension/PixelScaling";
import { color } from "../../constants/color";
import { DeleteTodoCall } from "../../redux/slices/DeleteTodo.Slice";

export const TodoList = ({ navigation }) => {
  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.login);
  const todoSelector = useSelector(State => State.fetchTodo);
  const deleteTodoSelector = useSelector(state => state.deleteTodo);
  const [userid, setUserId] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [deleteIcon, setDeleteIcon] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    const userID = userSelector.data._id
    setUserId(userID);
    console.log("deletetodod selctor", deleteTodoSelector.deleteSuccess);

    dispatch(fetchTodoCall(userID))
  }, [deleteTodoSelector.deleteSuccess]);

  useEffect(() => {
    console.log("todoSelector ", typeof todoSelector.data);
    setTodoList(todoSelector.data)
  }, [todoSelector.loading])
  const gotoAddTask = () => {
    console.log('comgn here');
    navigation.replace(screenNames.ADD_TODO)
  }
  const onLongPress = (data, id) => {
    //  console.log("id is",id);  
    setDeleteIcon(data);
    setCurrentItem(id)
  }
  const deleteTodoItem = () => {
    //   console.log("current item id",currentItem);
    const payload = {
      id: currentItem
    }
    dispatch(DeleteTodoCall(payload));
    setDeleteIcon(false);
  }
  const renderItem = (item) => {
    const isoDate = item.createdAt;
    const localDate = new Date(isoDate).toLocaleString();
    return (
      <View>
        <TodoComp
          title={item.title}
          description={item.description}
          id={item._id}
          onLongPress={onLongPress}
          createdAt={localDate}
          bgColor={currentItem== item._id ? color.CORAL :color.GREEN_200}
        />
      </View>
    )
  }

  return (
    <Loader isLoading={deleteTodoSelector.loading || todoSelector.loading}>
    <View style={styles.container}>
      <View style={styles.imgView}>
        <TouchableOpacity onPress={() => { gotoAddTask() }}>
          <Image source={require("../../assets/AddTask.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      {
        deleteIcon && (
          <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: actuatedNormalize(25),
          }}>
            <TouchableOpacity onPress={() => deleteTodoItem()}
              style={{
                marginBottom: actuatedNormalize(10),
                borderRadius: 8,
                width: actuatedNormalize(70),
                borderWidth: 2,
                borderColor: color.CORAL,
              }}
            >
              <Text style={{
                paddingVertical: actuatedNormalize(7),
                fontSize: actuatedNormalize(14),
                fontWeight: "bold",
                color: "red",
                textAlign: "center"
              }}>DELETE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log("current item id", currentItem);
            }}
              style={{
                marginLeft: actuatedNormalize(25),
                marginBottom: actuatedNormalize(10),
                borderRadius: 8,
                width: actuatedNormalize(90),
                borderWidth: 2,
                borderColor: color.LIGHT_GREEN,
              }}
            >
              <Text style={{
                //  paddingHorizontal:actuatedNormalize(5),
                paddingVertical: actuatedNormalize(7),
                fontSize: actuatedNormalize(14),
                fontWeight: "bold",
                color: "green",
                textAlign: "center"
              }}>COMPLETE</Text>
            </TouchableOpacity>
          </View>

        )
      }
      <FlatList
        data={todoList}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
    </Loader>
  )
}