import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { StyleSheet, TextInput} from 'react-native';
import ButtonComponent from "../../components/Button";
import InputField from '../../components/Input';
import ForgotPassword from './ForgotPassword';
import { useNavigation } from '@react-navigation/native';
import loginUser from './LoginAPIHook';
import { setStringItem } from '../../utils/Utils';
import Constants from '../../utils/Constants';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../context/userSlice';

const Login = ()=>{
    const [LoginUserName, setEmail] = useState('');
    const [LoginPassword, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleEmail=(value : string)=>{
        setEmail(value);
    }
    const handlePassword=(value:string)=>{
        setPassword(value);
    }
    const navigation = useNavigation();
    const onPress =()=>{
        navigation.navigate('ForgotPassword',{});
    }
    const onPressButton =async()=>{
        try{
            console.log(LoginUserName)
            console.log(LoginPassword)
            const {ErrorMessage,success, statusCode, LoginResp} = await loginUser({LoginUserName,LoginPassword});
            console.log(success);
            if(success === true){
                setStringItem(Constants.IS_LOGIN,'true');
                dispatch(userLogin(true));
            }
            else{
                console.log(ErrorMessage)   
            } 
        }
        catch(error)
        {
            console.log(error);
        }
        // navigation.navigate(Navscreen,{});
    }
    return (
    <View style = {styles.container}>
        <Text style={{
          fontWeight:'bold',
          textAlign:'center',
          marginBottom:50,
          color:'black',
          fontSize:50,
          fontFamily:'Poppins'
        }}>Login</Text>
        <InputField 
            text='Email' 
            secure={false} 
            executeAction={handleEmail} 
            value={LoginUserName}
            ></InputField>
        <InputField text='Password' secure={true} executeAction={handlePassword} value={LoginPassword}></InputField>
        <Text style={{
            textAlign:'center',
            fontSize:20
        }} onPress={onPress}>Forgot Password?</Text>
        <ButtonComponent text="Login" onPress={onPressButton}></ButtonComponent>
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
export default Login;