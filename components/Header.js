import React from "react"
import { StyleSheet, Text, View ,ScrollView,FlatList,TouchableOpacity} from 'react-native';
const Header=()=>{
    const styles=StyleSheet.create({
        header:{
            height:80,
            paddingTop:38,
            backgroundColor:"coral"
        },
        title:{
            textAlign:'center',
            fontSize:20,
            fontWeight:"500",
            color:"white"
        }
    })
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                TO DO App
            </Text>
        </View>
    )
    
}

export default Header;