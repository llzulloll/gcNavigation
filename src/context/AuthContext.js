import createDataContext from "./createDataContext";
import userApi from "../api/user";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {

    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup', 'signin':
            return { errorMessage: '', token: action.payload }
        case 'clear_err_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            return { token: null, errorMessage: '' }
        default:
            return state;
    }

};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_err_message' });
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('Map');
    } else {
        navigate('loginFlow')
    }

}


const signup = dispatch => async ({ email, password }) => {
    // make api request to sign up with that email and password
    // if we sign up, modify state, and say we are authenticated
    // if fails, reflect an error

    try {
        const response = await userApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token })

        navigate('Map');
    } catch (err) {

        dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
    }


}


const signin = dispatch => async ({ email, password }) => {
    // signin 
    // success -> update state
    // fail -> error 

    try {
        const response = await userApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token })

        navigate('Map');

    } catch (err) {
        dispatch({ type: 'add_error', payload: "Something went wrong with sign up" })
    }
}



const signout = dispatch => async () => {

    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('loginFlow')

}


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);