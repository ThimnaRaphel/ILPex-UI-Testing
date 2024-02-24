import React, { useState } from "react";
import { TouchableOpacity,Text,StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import loginUser from "../screens/Authentication/LoginAPIHook";

type ButtonProps = {text : string,onPress:()=>any};

const ButtonComponent = (props :ButtonProps)=>{

    const {text,onPress} = props;
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Text style ={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        height:50,
        backgroundColor: '#8518FF',
        padding: 10,
        margin:100,
        marginTop:40,
        borderRadius:10,
        shadowColor: '#8518FF',
      },
      text :{
        fontFamily:'Poppins',
        fontSize:20,
        color:'white'
      }
});

export default ButtonComponent;