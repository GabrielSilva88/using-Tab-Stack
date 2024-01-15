import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function navegaSobre() {
    navigation.navigate('Sobre')
  }
  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Button
        title='Ir para sobre'
        onPress={navegaSobre}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
