import React from 'react'
import {
    ToastAndroid,
    Alert,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    AsyncStorage,
    Keyboard
} from 'react-native'
import styles from './styles'
import axios from 'axios'


export default function Contagem({ route, navigation }) {
    var estAtual;
    const [estMax, setEstMax] = React.useState('');
    const produto = 'Produto'
    const endereco = 'endereco'

   
    return (
        <>
            <View style={styles.parceirobackground}>
                <Text style={styles.parceirotext}>{endereco}</Text>
            </View>
            <View style={styles.parceirobackground}>
                <Text style={styles.parceirotext}>{produto}</Text>
            </View>
            <View style={styles.container}>

                <Text style={styles.textTitle}>Quantidade</Text>
                <TextInput style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(number) => { estAtual = number }}
                ></TextInput>
                <TouchableOpacity style={styles.buttom}
                    onPress={() => {
                        Alert.alert('Registra Contagem')
                    }}
                >
                    <Text style={styles.textButtom}>Salvar Contagem</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}