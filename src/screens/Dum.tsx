import React from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts} from '../utils/fonts';
function Dum(): JSX.Element {
  const [count, useState] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
        <View style={[styles.box, styles.colorThree]}></View>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
        <View style={[styles.box, styles.colorThree]}></View>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
        <View style={[styles.box, styles.colorThree]}></View>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
        <View style={[styles.box, styles.colorThree]}></View>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
        <View style={[styles.box, styles.colorThree]}></View>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
        <View style={[styles.box, styles.colorThree]}></View>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
        <View style={[styles.box, styles.colorThree]}></View>
        <View style={[styles.box, styles.colorOne]}></View>
        <View style={[styles.box, styles.colorTwo]}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
  },
  boxContainer: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    width: 110,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
  },
  colorOne: {
    backgroundColor: 'dodgerblue',
  },
  colorTwo: {
    backgroundColor: 'yellow',
  },
  colorThree: {
    backgroundColor: 'orange',
  },
});
export default Dum;
