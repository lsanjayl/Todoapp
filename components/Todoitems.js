import React from "react"
import { StyleSheet, Text,TouchableOpacity,View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
const Todo=({item,pressHandle})=>{
    const styles=StyleSheet.create({
        
        title:{
            marginLeft:10,
        },
        item:{
            padding:16,
            marginTop:16,
            borderColor:'#333',
            borderStyle:'dashed',
            borderWidth:1,
            borderRadius:10,
            flexDirection:'row'
        }
    })



    return(
        <TouchableOpacity >
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18}color='#333' onPress={()=>pressHandle(item.id)}/>
            <Text style={styles.title}>
                {item.name}
            </Text>
            </View>
        </TouchableOpacity>
    )
    
}

export default Todo;