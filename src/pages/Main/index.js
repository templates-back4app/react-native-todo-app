import React from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Menu from '../../components/Menu';
import BackgroundImage from './../../assets/bg3.jpg';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={BackgroundImage}
    style={styles.container}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Image
      source={{
        uri:
          'https://user-images.githubusercontent.com/8621344/99892392-6f32dc80-2c42-11eb-8c32-db0fa4a66a81.png',
      }}
      style={styles.logo}
      resizeMode="contain"
    />

    <Menu />
  </ImageBackground>
);

export default Main;
