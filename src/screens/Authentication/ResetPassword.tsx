import React from 'react';
import {View, Text} from 'react-native';
import { StyleSheet, TextInput} from 'react-native';
import ButtonComponent from "../../components/Button";
import InputField from '../../components/Input';

const ResetPassword = ()=>{
    return (
    <View style = {styles.container}>
        <Text style={{
          fontWeight:'bold',
          textAlign:'center',
          marginBottom:100,
          color:'black',
          fontSize:30,
          fontFamily:'Poppins'
        }}>Reset Password</Text>
        <InputField text='Password' secure={true}></InputField>
        <InputField text='Confirm Password' secure={true}></InputField>
        <ButtonComponent text="Save" Navscreen='Loginscreen'></ButtonComponent>
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
export default ResetPassword;