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
import styles from '../Endereco/styles';
import renderItem from '../../Util/flatList';
import { Feather } from "@expo/vector-icons";


const Endereco = ({ clicked, navigation, route }) => {

    const [searchPhrase, setSearchPhrase] = React.useState('');
    const [data] = useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(false);
    }, [refreshing]);
    return (
        <>
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
                            Alert.alert('Busca pela camera o Endereco')
                            navigation.navigate('Produto')
                        }}
                    />
                    {/* Input field */}
                    <TextInput
                        style={styles.input}
                        placeholder="Código do endereço"
                        autoCapitalize={'characters'}
                        value={searchPhrase}
                        onChangeText={(text) => { setSearchPhrase(text) }}
                        onSubmitEditing={() => {
                            Alert.alert('Busca endereço')
                            navigation.navigate('Produto')
                        }}
                    />
                </View>
            </View>
            <SafeAreaView>
                <FlatList
                    data={data[0]}
                    renderItem={({ item }) => renderItem(item, navigation, 'Produto', 'endereco')}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />
            </SafeAreaView>
        </>
    );
};
export default Endereco
