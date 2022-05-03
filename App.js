import React from "react"
import {useState} from "react"
import Header from "./components/Header"
import Todo from "./components/Todoitems"
import Form from "./components/Form"
import { StyleSheet, Alert,TouchableWithoutFeedback,Keyboard, View,FlatList } from 'react-native';
export default function App() {
  const [list,setList]=useState([
    {name:'Badmiton at 6pm',id:'1'},
    {name:'Lunch at 12 pm',id:'2'},
    {name:'Dinner at 7am',id:'3'}
  ])
  const pressHandle=(id)=>{
    setList((p)=>{
      return p.filter(i=>i.id!=id)
    })
  }
  const submit=(todo)=>{
    if(todo.length>3){
      setList((p)=>{
        return [{name:todo,id: Math.random().toString()},...p]
      })
    }
    else{
      Alert.alert('Less characters','Length of the text is too small',[
        {text:'Ok',onPress:()=>console.log('alert closed')}
      ])
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <Form submit={submit}/>
          <View style={styles.list}>
          <FlatList
          data={list}
          renderItem={({item})=>{return(
            <Todo item={item} pressHandle={pressHandle}/>
          )} }
          >
          </FlatList>
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
    padding:40,
    flex:1,
  },
  list:{    
    margin:20,
    flex:1
  }
});