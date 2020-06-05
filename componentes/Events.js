import React, {Component } from 'react'
import { View, Text, TextInput} from 'react-native'
import padrao from '../estilo/Padrao'
import Padrao from '../estilo/Padrao'

export default class Events extends React.Component {
    state = {
        texto: ''
    }
    alterarTexto = texto => {
        this.setState({texto})
    }
    render() {
        return (
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto} 
                        style={Padrao.input}
                        onChangeText={this.alterarTexto} />
            </View>
        )
    }
}

