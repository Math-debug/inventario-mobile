import React, { useState, useEffect } from 'react';

import {
  KeyboardAvoidingView,
  View,
  Text,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  Alert,
  ToastAndroid
} from 'react-native';
import styles from './styles';

export default function App({navigation}) {

  var username;
  var password;

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 256, y: 256 }));

  useEffect(() => {
    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver : true
      })
    ]).start();
  }, []);

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y
            }}
            source={require('../../assets/logo.png')}
          />
        </View>

        <Animated.View style={[
          styles.form,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y
              }
            ]
          }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            onChangeText={(text) => { username = text }}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            //keyboardType="visible-password"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => { password = text }}
          />

          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={function () {
              Alert.alert("Login efetuado")
              navigation.navigate('Endereco')
            }}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
};