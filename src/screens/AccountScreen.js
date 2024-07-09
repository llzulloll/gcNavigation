import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);
    return (

        <View style={styles.view}>
            <View style={styles.container}>
                <Text h2>Account</Text>
            </View>
            <Spacer>
                <Button
                    title='Sign Out'
                    onPress={signout}
                />
            </Spacer>

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
        alignItems: 'center',
    }
});

export default AccountScreen;


