import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";

const MapScreen = ({ isFocused }) => {

    return (

        <View style={styles.view} >

            <Text h2>Create A Track </Text>
            <Map />
            {err ? <Text style={styles.error}>Please enable location services</Text> : null}

        </View>
    );
};



const styles = StyleSheet.create({
    error: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 15,
    },
    view: {
        marginTop: 55,
        marginLeft: 15,
        marginRight: 15
    }
});

export default withNavigationFocus(MapScreen);


