import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";


type BatchComponentProps = {batchName : string, traineeNo : string, date : string};

const BatchComponent=({batchName,traineeNo,date} : BatchComponentProps)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.batchName}>{batchName}</Text>
            <Text style={styles.traineeNo}>Trainees {traineeNo}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFAFA',
        borderRadius:20,
        // width:'80%',
        height:90,
        marginBottom : '10%',
        // margin:'10%',
        elevation:5,
        shadowColor: '#000',
        shadowOffset:{ width: 0, height: 0 }
    },
    batchName:{
        margin:10,
        marginBottom:5,
        color : 'black',
        fontWeight:'bold',
        fontSize:20
    },
    traineeNo:{
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
    }
})

export default BatchComponent