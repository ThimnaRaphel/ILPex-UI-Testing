import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import BatchComponent from "../../components/BatchComponent";

const details = [
    {    id : '1',
         batchName : 'ILP 2023-24 Batch 1',
         traineeNo : '40',
         date : "13 Sept 2023"
       },
    {  id : '2',
       batchName : 'ILP 2023-24 Batch 2',
       traineeNo : '50',
       date : "20 Oct 2023"
     }, 
    {  id : '3',
     batchName : 'ILP 2023-24 Batch 3',
     traineeNo : '50',
     date : "20 Oct 2023"
   }
]

const Batches = ()=>{
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Batches</Text>
            <View style={styles.box}>
                <BatchDisplay></BatchDisplay>
            </View>
        </View>
    )
};

const BatchDisplay =()=>{
    return (
        <View style = {styles.dataContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={details}
            renderItem={({ item }) => <BatchComponent batchName={item.batchName} traineeNo={item.traineeNo} date={item.date}/>}
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
        marginTop:'15%'
    },
    box :{
        backgroundColor:"white",
        height : "100%",
        marginTop: '10%',
        borderTopEndRadius : 30,
        borderTopStartRadius : 30,
    }
});

export default Batches;