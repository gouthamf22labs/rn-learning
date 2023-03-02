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
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{count}</Text>
          <View style={styles.boxStyle}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => useState(count + 1)}>
              <Text>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={count < 1 ? true : false}
              style={count < 1 ? styles.dangerStyle : styles.buttonStyle}
              onPress={() => useState(count - 1)}>
              <Text>Decrement</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxStyle}>
            <TouchableNativeFeedback
              onPress={() => console.log('on press event')}
              onPressIn={() => console.log('on press in')}
              onLongPress={() => console.log('on long press in')}>
              <Image
                resizeMode="contain"
                fadeDuration={1500}
                blurRadius={3}
                source={require('../../assets/images/bg.jpg')}
                style={{width: 300, height: 300}}
              />
            </TouchableNativeFeedback>
          </View>
          <View style={styles.boxStyle}>
            <Image
              source={{uri: 'https://picsum.photos/300'}}
              style={{width: 300, height: 300}}
            />
          </View>
          <Button
            title="press alert"
            onPress={() =>
              Alert.alert('button clicked', 'my message', [
                {text: 'ok', onPress: () => console.log('ok')},
                {text: 'not ok', onPress: () => console.log('no ok')},
              ])
            }
          />
          <Button
            title="press prompt"
            onPress={() =>
              Alert.prompt('button clicked', 'my message', text =>
                console.log(text),
              )
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 5,
    borderStyle: 'solid',
    flexDirection: 'row',
    //padding: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
  },
  textcontainter: {
    marginTop: 5,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
  },
  buttonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dashed',
    fontSize: 20,
    color: 'green',
    fontFamily: fonts.extraBold,
  },
  textStyle: {
    fontSize: 40,
    color: 'green',
    fontFamily: fonts.extraBold,
  },
  dangerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
    color: 'red',
    backgroundColor: 'red',
    fontFamily: fonts.extraBold,
  },
  container: {
    flex: 1,
    gap: 10,
    padding: 30,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    marginTop: 10,
  },
  boxStyle: {
    flexDirection: 'row',
    gap: 10,
    padding: 30,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
export default Dum;
