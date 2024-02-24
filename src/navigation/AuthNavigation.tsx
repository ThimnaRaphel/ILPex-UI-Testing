import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Authentication/Login";
import ResetPassword from "../screens/Authentication/ResetPassword";
import ForgotPassword from "../screens/Authentication/ForgotPassword";

const StackNav = createNativeStackNavigator();

export function AuthStackNavigation() {
    return(
        <StackNav.Navigator>
            <StackNav.Screen
                name="Loginscreen"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <StackNav.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    headerShown: false,
                }}
            />
            <StackNav.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{
                    headerShown: false,
                }}
            />
    </StackNav.Navigator>
    )
            };

export default AuthStackNavigation;