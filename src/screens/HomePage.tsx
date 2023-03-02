import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {fonts} from '../utils/fonts';
function HomePage(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.blackBg]}>
        <ImageBackground
          source={require('../../assets/images/bg.jpg')}
          style={styles.img}>
          <View style={styles.textContainer}>
            <Text style={styles.defaultText}>Welcome to Helia 👋</Text>
            <Text style={styles.greenText}>Helia</Text>
            <Text style={styles.smallText}>
              The best hotel booking in this century
            </Text>
            <Text style={styles.smallText}>to accompany your vaccation</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 10,
    flex: 1,
    paddingBottom: 15,
  },
  blackBg: {
    flex: 1,
    backgroundColor: 'black',
  },
  greenText: {
    fontFamily: fonts.bold,
    color: '#2DD172',
    fontSize: 50,
  },
  defaultText: {
    fontFamily: fonts.regular,
    color: 'white',
    fontSize: 35,
    marginBottom: 10,
  },
  smallText: {
    fontFamily: fonts.thin,
    color: 'white',
    fontSize: 18,
  },
  img: {
    widht: '100%',
    height: '100%',
  },
});
export default HomePage;
