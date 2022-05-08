import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet, Alert, AsyncStorage, ToastAndroid } from 'react-native'
import Login from '../Componentes/Login'
import Endereco from '../Componentes/Endereco'
import Produto from '../Componentes/Produtos'
import Contagem from '../Componentes/Contagem';
const Stack = createStackNavigator();
const styles = StyleSheet.create({
    submitText: {
        color: '#FFF',
        fontSize: 19,
    },
})


function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
                headerTitle: '',
                headerStyle: { backgroundColor: '#F0F0F0' },
            }} />
            <Stack.Screen name="Endereco" component={Endereco} options={{
                headerTitle: 'Endereços',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#006525' },
            }} />
            <Stack.Screen name="Produto" component={Produto} options={{
                headerTitle: 'Produto',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#006525' },
            }} />
            <Stack.Screen name="Contagem" component={Contagem} options={{
                headerTitle: 'Contagem',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#006525' },
            }} />
        </Stack.Navigator>
    );
}

export default function Route() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}