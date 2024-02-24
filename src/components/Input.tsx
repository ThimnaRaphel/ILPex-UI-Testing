import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type InputProps = {text : string, secure : boolean, value:string,executeAction :(emailText:string) =>void}

const InputField = ({text,secure, executeAction,value}:InputProps)=>{
    return (
        <View style = {{
            marginLeft:40,
            marginRight:40
        }}>
    <Text style = {styles.text}>{text}</Text>
        <TextInput
            style={styles.input}
            placeholder={text}
            secureTextEntry={secure}
            value={value}
            onChangeText={executeAction}
        />
        </View>
    )
};


const styles = StyleSheet.create({
    input:{
        height : 50,
        marginBottom:40,
        borderWidth: 0, 
        borderColor:'black',
        borderBottomWidth: 1,
        fontSize:23
    },
    text:{
        fontFamily:'Poppins',
        fontSize:20,
        color:'grey',
        marginLeft:3
    }
});

export default InputField;

