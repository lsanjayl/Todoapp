import React ,{useState} from "react"
import { StyleSheet, View,TextInput,Button} from 'react-native';
const Form=({submit})=>{
    const styles=StyleSheet.create({
        
        input:{
            marginBottom:10,
            paddingHorizontal:8,
            paddingVertical:6,
            borderColor:'#bbb',
            borderWidth:1,
            borderStyle:'dashed',
            borderRadius:10
        }
    })
    const [state,setText]=useState("");
    const changeHnadler=(i)=>{
        setText(i);
    }

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo..'
            onChangeText={changeHnadler}
            />
            <Button title="Add" onPress={()=>submit(state)}/>
        </View>
    )
    
}

export default Form;
