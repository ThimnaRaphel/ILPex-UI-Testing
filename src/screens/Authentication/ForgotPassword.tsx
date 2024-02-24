import React from 'react';
import {View, Text} from 'react-native';
import { StyleSheet, TextInput} from 'react-native';
import ButtonComponent from "../../components/Button";
import InputField from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = ()=>{
    // const navigation = useNavigation();
    const onPress = () => {}
    return (
    <View style = {styles.container}>
        <Text style={{
          fontWeight:'bold',
          textAlign:'center',
          marginBottom:30,
          color:'black',
          fontSize:40,
          fontFamily:'Poppins'
        }}>Forgot Password?</Text>
        <Text style={{
            marginBottom:70,
            fontFamily:'Poppins',
            color:'grey',
            fontSize:20,
            textAlign:'center',
            marginLeft:40,
            marginRight:40
        }}>To initiate the password reset process, kindly provide your email address below.</Text>
        <InputField text='Email' secure={false}></InputField>
        <ButtonComponent text='Submit' onPress = {onPress}></ButtonComponent>
    </View>
    );
};

const styles = StyleSheet.create ({
    container:{
        height: 900,
        display: 'flex',
        justifyContent: 'center'
    },
    input:{
        marginTop:30
    }
})
export default ForgotPassword;