import {
    Text,
    AsyncStorage,
    TextInput,
    View,
    Keyboard,
    Alert,
    SafeAreaView,
    FlatList,
    RefreshControl
} from 'react-native'
import React, { useState } from 'react';
import renderItem from '../../Util/flatList';
import styles from '../Produtos/styles';
import { Feather } from "@expo/vector-icons";
import axios from 'axios'


const Produtos = ({ clicked, navigation, route }) => {

    const [searchPhrase, setSearchPhrase] = React.useState('');

    const parceiro = 'Endereco'
    const [data] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(false);
    }, [refreshing]);
  
    return (
        <>
            <View style={styles.produtobackground}>
                <Text style={styles.produtotext}>{parceiro}</Text>
            </View>
            <View style={styles.container}>
                <View
                    style={
                        clicked
                            ? styles.searchBar__clicked
                            : styles.searchBar__unclicked
                    }
                >
                    {/* search Icon */}
                    <Feather
                        name="camera"
                        size={30}
                        color="black"
                        style={{ marginRight: 1 }}
                        onPress={() => {
                            Alert.alert('Busca de codigo do Produto pela camera')
                            navigation.navigate('Contagem')
                        }}
                    />
                    {/* Input field */}
                    <TextInput
                        style={styles.input}
                        placeholder="Codígo ou Nome do Produto"
                        autoCapitalize={'characters'}
                        value={searchPhrase}
                        onChangeText={(text) => { setSearchPhrase(text) }}
                        onSubmitEditing={() => {
                            Alert.alert('Busca de codigo do Produto')
                            navigation.navigate('Contagem')
                        }}
                    />
                </View>
            </View>
            <SafeAreaView>
                <FlatList
                    data={data[0]}
                    renderItem={({ item }) => renderItem(item, navigation, 'Contagem', 'produto')}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />
            </SafeAreaView>
        </>
    );
};
export default Produtos
