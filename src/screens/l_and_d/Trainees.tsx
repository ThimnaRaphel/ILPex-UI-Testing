import React from "react";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import { SearchBar } from "react-native-screens";

const data=[
    {
        id:"1",
        name:"Ashik George",
        batchName : "ILP 2023-24 Batch 1",
        imageUrl : "https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg"
    },
    {
        id:"2",
        name:"Joel C Raju",
        batchName : "ILP 2023-24 Batch 2",
        imageUrl : "https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg"
    },
    {
        id:"3",
        name:"Sreejaya V S",
        batchName : "ILP 2023-24 Batch 3",
        imageUrl : "https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg"
    },
]

const Trainees =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trainees</Text>
            <View style={styles.box}>
                <TextInput
                    style={styles.search}
                    placeholder="Search..."
                />
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
            renderItem={({ item }) => <Card name={item.name} batchName={item.batchName} imageUrl={item.imageUrl}/>}
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
        fontSize:30,
        fontWeight:"bold",
        color: "white", 
    },
    text:{
        textAlign:'center',
        fontSize:50,
        fontWeight:"bold",
        color: "white",
        marginTop: "15%"
    },
    box :{
        backgroundColor:"white",
        height : "100%",
        marginTop: '10%',
        borderTopEndRadius : 30,
        borderTopStartRadius : 30
    },
    search: {
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        height: 50,
        borderColor: '#E4D8FE',
        backgroundColor:'#E4D8FE',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,
      },
});

export default Trainees;