import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={({ email, password }) => signin({ email, password })} // can shorten to -> signup
            />
            <NavLink
                routeName='Signup'
                text="Don't have an account yet? Sign up instead"
            />

        </ View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },

});

export default SigninScreen;


