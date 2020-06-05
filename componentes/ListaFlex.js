import React from 'react'
import { ScrollView, View, FlatList, Text, _FlatList} from 'react-native'
const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    {id: 2, nome: 'Julia', nota: 3.4},
    {id: 3, nome: 'Roberto', nota: 5.5},
    {id: 4, nome: 'Rafael', nota: 10.0},
    {id: 5, nome: 'Guilherme', nota: 8.0},
    {id: 6, nome: 'João', nota: 7.9},
    {id: 7, nome: 'Julia', nota: 3.4},
    {id: 8, nome: 'Roberto', nota: 5.5},
    {id: 9, nome: 'Rafael', nota: 10.0},
    {id: 10, nome: 'Guilherme', nota: 8.0},
    {id: 11, nome: 'João', nota: 7.9},
    {id: 12, nome: 'Julia', nota: 3.4},
    {id: 13, nome: 'Roberto', nota: 5.5},
    {id: 14, nome: 'Rafael', nota: 10.0},
    {id: 15, nome: 'Guilherme', nota: 8.0},
    {id: 16, nome: 'Rafael', nota: 10.0},
    {id: 17, nome: 'Guilherme', nota: 8.0},
    {id: 18, nome: 'João', nota: 7.9},
    {id: 19, nome: 'Julia', nota: 3.4},
    {id: 20, nome: 'Roberto', nota: 5.5},
    {id: 21, nome: 'Rafael', nota: 10.0},
    {id: 22, nome: 'Guilherme', nota: 8.0}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height:70,
    width:300,
    backgroundColor:'#ddd',
    borderWidth:0.5,
    borderColor:'#222',

    // flex
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }
  
    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} 
                keyExtractor={(_, index) => index.toString()} />

    

        </ScrollView>
    )
}