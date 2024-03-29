import React from "react";
import { FlatList, Image, SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

type CardProps={name : string,batchName : string}

const CardAssessment =({name,batchName} : CardProps)=>{
    return ( 
            <View style={styles.container}>
                <View style={{
                    flex:1
                }}>
                    <Text style={styles.Name}>{name}</Text>
                    <Text style={styles.batchName}>{batchName}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#FAFAFA',
        borderRadius:20,
        // width:'80%',
        height:90,
        marginBottom : '5%',
        // margin:'10%',
        elevation:5,
        shadowColor: '#000',
        shadowOffset:{ width: 0, height: 0 },
        flexDirection:"row",
    },
    Name:{
        marginLeft : 10,
        marginBottom:5,
        color : 'black',
        fontWeight:'bold',
        fontSize:20
    },
    batchName:{
        marginLeft:10,
        fontWeight:'bold',
        fontSize:15
    },
    date : {
        marginTop:5,
        marginLeft:10,
        color:'#8518FF',
        fontWeight:'bold',
        fontSize:15
    },
});

export default CardAssessment;