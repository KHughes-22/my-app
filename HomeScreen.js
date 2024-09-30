import * as React from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const size = Dimensions.get('window').width
const styles = StyleSheet.create({
    itemContainer:{
        width: size,
        height: size / 3,
    },
    item: {
        flex: 1,
        margin: 3,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "lightblue",
    }
});


const data = [
    {id: 1, value: 'light meter', navigateTo: "AmbientLightMeter"},
    {id: 2, value: 'log', navigateTo: "FilmLog"},
    {id: 3, value: 'View Finder', navigateTo: "ViewFinder"}
];


const HomeScreen = ({ navigation }) =>{
    return (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>navigation.navigate(item.navigateTo)} style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}/>
      );
}

export default HomeScreen;
