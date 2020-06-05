import React from 'react'
import { Button, Alert, ToasTAndroid, Platform, ToastAndroid } from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android') {
            //ios
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação aaa: ', msg)
        }
    }

    return (
        <Button title="Plataform?" onPress={() => notificar('Parabens!!')} />
    )
}