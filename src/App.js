/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import {Button} from 'react-native-paper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darker = '#222';
  const lighter = '#F3F3F3';
  const black = '#000000';
  const white = '#FFFFFF';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? darker : lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? black : white,
          alignItems:'center'
        }}>
        <Text style={styles.sectionTitle}> Examen de Recuperació 23-24</Text>
        <Text style={styles.sectionDescription}> Escriu ací el teu nom</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    color: 'black',
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
