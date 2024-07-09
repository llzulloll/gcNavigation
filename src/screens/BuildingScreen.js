import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const BuildingScreen = () => {

    return (

        <View style={styles.view} >
            <View style={styles.container}>
                <Text h2>Building Screen</Text>
            </View>


        </View>
    );
};



const styles = StyleSheet.create({
    view: {
        marginTop: 55,
        marginLeft: 15,
        marginRight: 15
    },
    container: {
        marginBottom: 25,
        alignItems: 'center',
    }
});

export default BuildingScreen;


