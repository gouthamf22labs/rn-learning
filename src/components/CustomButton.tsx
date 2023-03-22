import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {fonts} from '../utils/fonts';

const CustomButton = (props: any) => {
  const {handleSubmit, isValid = true, buttonText, ...rest} = props;
  return (
    <View style={{width: '100%'}}>
      <TouchableWithoutFeedback
        onPress={handleSubmit}
        disabled={!isValid}
        {...rest}>
        <View
          style={[styles.loginButton, !isValid && {backgroundColor: 'red'}]}>
          <Text style={styles.textStyle}>{buttonText}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1AB65C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.regular,
  },
});
export default CustomButton;
