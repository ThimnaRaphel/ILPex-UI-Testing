import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Authentication/Login";
import ResetPassword from "../screens/Authentication/ResetPassword";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Batches from "../screens/l_and_d/Batches";
import Trainees from "../screens/l_and_d/Trainees";
import Assessments from "../screens/l_and_d/Assessments";
import Icon from 'react-native-vector-icons/FontAwesome';
import Logout from "../screens/Authentication/Logout";

const StackNav = createNativeStackNavigator();
const BottomNav = createBottomTabNavigator();
export function HomeStackNavigation() {
    return(
        <StackNav.Navigator>
            <StackNav.Screen
                name="Bottomnav"
                component={BottomNavigation}
                options={{
                    headerShown: false,
                }}
            />
        </StackNav.Navigator>
    )
}

const BottomNavigation = ()=>{
    return (
             <BottomNav.Navigator
             initialRouteName="Batches"
             screenOptions={{
                 tabBarActiveTintColor : '#8518FF',
                 tabBarInactiveTintColor:'grey'
             }}>
                <BottomNav.Screen 
                 name="Trainees" 
                 component={Trainees}  
                 options={{
                         headerShown: false,
                         tabBarIcon: ({color,focused,size})=>{
                            return(
                                <Icon name="user" color={color} size={30}/>
                            )
                        }
                     }}>
                </BottomNav.Screen>

                <BottomNav.Screen 
                 name="Batches" 
                 component={Batches}  
                 options={{
                         headerShown: false,
                         tabBarIcon: ({color,focused,size})=>{
                            return(
                                <Icon name="users" color={color} size={30}/>
                            )
                        }
                     }}>
                </BottomNav.Screen>

                <BottomNav.Screen 
                 name="Assessments" 
                 component={Assessments}  
                 options={{
                         headerShown: false,
                         tabBarIcon: ({color,focused,size})=>{
                            return(
                                <Icon name="clipboard" color={color} size={30}/>
                            )
                        }
                     }}>
                </BottomNav.Screen>
                <BottomNav.Screen 
                 name="Logout" 
                 component={Logout}  
                 options={{
                         headerShown: false,
                         tabBarIcon: ({color,focused,size})=>{
                            return(
                                <Icon name="circle-xmark" color={color} size={30}/>
                            )
                        }
                     }}>
                </BottomNav.Screen>
             </BottomNav.Navigator>
    )
}