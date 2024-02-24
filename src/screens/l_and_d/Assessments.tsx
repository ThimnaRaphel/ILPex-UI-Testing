import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import CardAssessment from "../../components/CardAssessment";

const data=[
    {
        id:"1",
        name:"My SQL",
        batchName : "ILP 2023-24 Batch 1"
    },
    {
        id:"2",
        name:"Communication Skills",
        batchName : "ILP 2023-24 Batch 2"
    },
    {
        id:"3",
        name:"Python",
        batchName : "ILP 2023-24 Batch 3"
    },
]

const Assessments = ()=>{
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Assessments</Text>
            <View style={styles.box}>
                <CardDisplay></CardDisplay>
            </View>
        </View>
    )
};

const CardDisplay =()=>{
    return (
        <View style = {styles.dataContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={data}
            renderItem={({ item }) => <CardAssessment name={item.name} batchName={item.batchName} />}
            keyExtractor={item => item.id}
          />
        </View>
      );
}



const styles = StyleSheet.create({
    dataContainer : {
        margin : '10%',
    },
    container :{
        backgroundColor:"#8518FF",
        height : '100%',
    },
    text:{
        textAlign:'center',
        fontSize:50,
        fontWeight:"bold",
        color: "white",
        marginTop:"15%"
    },
    box :{
        backgroundColor:"white",
        height : "100%",
        marginTop: '10%',
        borderTopEndRadius : 30,
        borderTopStartRadius : 30
    }
});

export default Assessments;