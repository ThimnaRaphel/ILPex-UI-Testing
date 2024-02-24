import React from "react";
import ButtonComponent from "../../components/Button";
import { View } from "react-native";
import { setStringItem } from "../../utils/Utils";
import { userLogin } from "../../context/userSlice";
import Constants from "../../utils/Constants";
import { useDispatch } from "react-redux";

const dispatch = useDispatch();
const onPress=()=>{
    setStringItem(Constants.IS_LOGIN,'false');
    dispatch(userLogin(false));
}
const Logout=()=>{
    return (<View>
        <ButtonComponent text="Logout" onPress={onPress}></ButtonComponent>
    </View>
    )
};

export default Logout;


