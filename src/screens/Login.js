import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../redux/action/actions'

const Login = ({navigation}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.authReducer)

    return (
        <View
            style={styles.mainContainer}
        >
            <View
                style={styles.headerContainer}
            >
                <Text 
                    style={styles.title}
                >User ID</Text>
            </View>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='Enter your login'
                />
            </View>
            <View
                style={styles.headerContainer}
            >
                <Text 
                    style={styles.title}
                >Password</Text>
            </View>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Enter your password'
                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <Button
                    title='Login'
                    onPress={() => {
                        dispatch(logIn({name, password}))
                    }}
                />
            </View>
            <View
                style={styles.touchableContainer}
            >
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SignUp')}}
                >
                    <Text
                        style={styles.text}
                    >If you have no account, let's SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        margin: '5%',
        flexDirection: 'column'
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2%'
    },
    inputContainer: {
        paddingBottom: '5%'
    },
    buttonContainer: {
        paddingBottom: 10
    },
    touchableContainer: {
        alignItems: 'center',
        paddingTop: '5%'
    },
    touchable: {

    },
    text: {
        color: 'blue'
    },
    title: {
        fontSize: 18,
        color: 'black'
    },
    input: {
        borderRadius: 5,
        color: 'black',
        backgroundColor: 'white'
    },

})